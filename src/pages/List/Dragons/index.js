import React, { useState } from "react";
import dayjs from "dayjs";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { faTimes, faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  Button, 
  DeleteButtonContainer, 
  Input, 
  Separator, 
  UpdateModal, 
  DeleteButtonModal, 
  Icons, 
  Row 
} from "../../../components";
import { 
  ButtonBox, 
  DragonsRecipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer,
  Text,
  ModalMessage,
  ModalcloseButtom,
  ModalButtomContainer,
  UpdateModalHeader
} from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import { DragonsHeader, Recipe, RecipeContainer } from "../styles";


function Dragons({item, isClicked, setIsClicked}) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [updatedDragon, setUpdatedDragon] = useState({
    newName: item.name,
    newType: item.type
  })

  const {notify} = useAuth()

  async function handleUpdate(id) {
    if(updatedDragon.newName === '' || updatedDragon.newType === '') {
      notify.error()
    } 
    else if(updatedDragon.newName === item.name && updatedDragon.newType === item.type) {
      notify.info()
    } 
    else {
      await updateDragon(id, {
        name: `${updatedDragon.newName}`,
        type: `${updatedDragon.newType}`
      })
      notify.success()
    }
    setIsClicked(!isClicked)
    setUpdateModal(false)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  function handleCancelButton() {
    setUpdateModal(false)
    setUpdatedDragon({
      newName: item.name,
      newType: item.type
    })
  }

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }


  return (
    <>
      <DragonsContainer >
        <DragonsRecipe>
          <DateContainer>
            {dayjs(item.createdAt).format('DD/MM/YYYY')}
          </DateContainer>
        </DragonsRecipe>
        <DragonsRecipe>
          <NameContainer>
            {item.name}
          </NameContainer>
        </DragonsRecipe>
        <DragonsRecipe>
          <TypeContainer>
            {item.type}
          </TypeContainer>
        </DragonsRecipe>
        <ButtonBox>
          <Button onClick={() => setUpdateModal(true)} edit>
            <Icons icon={faPencilAlt} fa_pencil_check/>
          </Button>
          <Separator />
          <DeleteButtonContainer>
            <Button onClick={() => setDeleteModal(true)} del>
              <Icons icon={faTrashAlt} fa_trash />
            </Button>
          </DeleteButtonContainer>
        </ButtonBox>
        <UpdateModal 
          updateModal={updateModal} 
          setUpdateModal={setUpdateModal} 
          handleCancelButton={handleCancelButton}
        >
          <UpdateModalHeader>
            <DragonsHeader x={100}>
              <RecipeContainer className="mobile_modal">
                <Recipe>Modificado em/</Recipe>
                <Recipe>Modified at</Recipe>
              </RecipeContainer>
              <RecipeContainer className="mobile_modal">
                <Recipe>Nome/Name</Recipe>
              </RecipeContainer>
              <RecipeContainer className="mobile_modal">
                <Recipe>Tipo/Type</Recipe>
              </RecipeContainer>
            </DragonsHeader>
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
            <ButtonBox className="modalButtonBox_mobile">
              <Button onClick={() => handleUpdate(item.id)} x={100} modal_edit >
                <Icons icon={faCheck} fa_pencil_check/> 
              </Button>
              <Separator/>
              <Button onClick={handleCancelButton} x={120} modal_edit>
                <Icons icon={faTimes} fa_times />
              </Button>
            </ButtonBox>
          </Row>
        </UpdateModal>
        <DeleteButtonModal deleteModal={deleteModal} setDeleteModal={setDeleteModal}>
          <ModalMessage>
            <Text>Esta ação ira apagar o Dragão permanentemente!</Text>  
            <Text>This will delete the Dragon permanently!</Text>
          </ModalMessage>
          <ModalButtomContainer>
            <ModalcloseButtom>
              < Button 
                onClick={() => setDeleteModal(false)}
                x={17} 
                y={17} 
                custom
              >
                <Icons icon={faTimes} fa_times/>
              </Button>
            </ModalcloseButtom>
            <DeleteButtonContainer>
              <Button onClick={() => handleDelete(item.id)}>
                <Icons icon={faTrashAlt} list hoverColor={'#990000'}/>
              </Button>
            </DeleteButtonContainer>
          </ModalButtomContainer>
        </DeleteButtonModal>
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons