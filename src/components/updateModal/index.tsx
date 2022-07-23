import React, { useState } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { Button, Icons, Input, Row, Separator } from "..";
import { 
  UpdateModalContainer,
  UpdateModalHeader,
  ModalDragonsHeader,
  ModalRecipeContainer,
  ModalRecipe, 
  ButtonBox,
  DragonsRecipe,
  DateContainer
} from "./styles";
import { requestUpdateDragon } from "../../store/ducks/update";
import { toast } from "react-toastify";
import handleLanguage from "../../resources/LangSource";
import { Dragon, useAppDispatch } from "../../@types/types";

type UpdateModalProps = {
  item: Dragon;
  updateModal: boolean;
  setUpdateModal: (value: boolean) => void;
  isClicked: boolean;
  setIsClicked: (value: boolean) => void
}


function UpdateModal(
  {item, updateModal, setUpdateModal, isClicked, setIsClicked}: UpdateModalProps
  ) {
  const [updatedDragon, setUpdatedDragon] = useState({
    newName: item.name,
    newType: item.type
  })
  const dispatch = useAppDispatch()

  async function handleUpdate(id: number) {
    if(updatedDragon.newName === '' || updatedDragon.newType === '') {
      toast.error(handleLanguage('createError'))
    } else if(updatedDragon.newName === item.name && updatedDragon.newType === item.type) {
      toast.info(handleLanguage('noUpdate'))
    } else {
      await dispatch(requestUpdateDragon(id, {
        name: `${updatedDragon.newName}`,
        type: `${updatedDragon.newType}`
      }))
      toast.success(handleLanguage('updateSuccess'), {position: 'top-center'})
    }
    setIsClicked(!isClicked)
    setUpdateModal(false)
  }

  function handleCancelButton() {
    setUpdateModal(false)
    setUpdatedDragon({
      newName: item.name,
      newType: item.type
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  return (
    <UpdateModalContainer
      closeTimeoutMS={2000}
      isOpen={updateModal}
      onRequestClose={() => handleCancelButton()}
      style={{
        overlay:{
          background: '#00000077',
          backdropFilter: 'blur(2px)',
        }
      }}
    >
      <UpdateModalHeader>
        <ModalDragonsHeader>
          <ModalRecipeContainer>
            <ModalRecipe>{handleLanguage('modified')}</ModalRecipe>
          </ModalRecipeContainer>
          <ModalRecipeContainer>
            <ModalRecipe>{handleLanguage('name')}</ModalRecipe>
          </ModalRecipeContainer>
          <ModalRecipeContainer>
            <ModalRecipe>{handleLanguage('type')}</ModalRecipe>
          </ModalRecipeContainer>
        </ModalDragonsHeader>
      </UpdateModalHeader>
      <Row update_modal >
        <DragonsRecipe>
          <DateContainer>
            {dayjs(item.updatedAt).format('DD/MM/YYYY')}
          </DateContainer>
        </DragonsRecipe>
        <DragonsRecipe>
          <Input
            onChange={handleChange}
            id='newName'
            type='text'
            value={updatedDragon.newName}
            update_modal
          />
        </DragonsRecipe>
        <DragonsRecipe>
          <Input 
            onChange={handleChange} 
            id='newType'
            type='text'
            value={updatedDragon.newType}
            update_modal
          />
        </DragonsRecipe>
        <ButtonBox>
          <Button onClick={() => handleUpdate(item.id)} modal_edit >
            <Icons faIcon={faCheck} fa_pencil_check /> 
          </Button>
          <Separator/>
          <Button onClick={handleCancelButton} modal_edit>
            <Icons faIcon={faTimes} fa_times />
          </Button>
        </ButtonBox>
      </Row>
    </UpdateModalContainer>
  )
}

export default UpdateModal