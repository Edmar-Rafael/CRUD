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
import { useDispatch } from "react-redux";
import { requestUpdateDragon } from "../../store/ducks/update";
import { toast } from "react-toastify";

function UpdateModal({item, updateModal, setUpdateModal, isClicked, setIsClicked}) {
  const [updatedDragon, setUpdatedDragon] = useState({
    newName: item.name,
    newType: item.type
  })
  const dispatch = useDispatch()

  async function handleUpdate(id) {
    try {
      if(updatedDragon.newName === '' || updatedDragon.newType === '') {
        toast.error(
          'Ops! Nome e/ou Tipo não inseridos! \n Oops! Name and/or Type not inserted'
        )
      } else if(updatedDragon.newName === item.name && updatedDragon.newType === item.type) {
        toast.info('Nenhuma alteração realizada! \n No changes made!')
      } else {
        await dispatch(requestUpdateDragon(id, {
          name: `${updatedDragon.newName}`,
          type: `${updatedDragon.newType}`
        }))
        toast.success('Dragão modificado com sucesso! \n Dragon modified successfull')
      }
      setIsClicked(!isClicked)
      setUpdateModal(false)
    } catch(error) {
      return error
    }
  }

  function handleCancelButton() {
    setUpdateModal(false)
    setUpdatedDragon({
      newName: item.name,
      newType: item.type
    })
  }

  function handleChange(event) {
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
            <ModalRecipe>Modificado em/</ModalRecipe>
            <ModalRecipe>Modified at</ModalRecipe>
          </ModalRecipeContainer>
          <ModalRecipeContainer>
            <ModalRecipe>Nome/Name</ModalRecipe>
          </ModalRecipeContainer>
          <ModalRecipeContainer>
            <ModalRecipe>Tipo/Type</ModalRecipe>
          </ModalRecipeContainer>
        </ModalDragonsHeader>
      </UpdateModalHeader>
      <Row update_modal>
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
            list
            value={updatedDragon.newName}
          />
        </DragonsRecipe>
        <DragonsRecipe>
          <Input 
            onChange={handleChange} 
            id='newType'
            type='text'
            list
            value={updatedDragon.newType}
          />
        </DragonsRecipe>
        <ButtonBox>
          <Button onClick={() => handleUpdate(item.id)} x={100} modal_edit >
            <Icons icon={faCheck} fa_pencil_check/> 
          </Button>
          <Separator/>
          <Button onClick={handleCancelButton} x={120} modal_edit>
            <Icons icon={faTimes} fa_times />
          </Button>
        </ButtonBox>
      </Row>
    </UpdateModalContainer>
  )
}

export default UpdateModal