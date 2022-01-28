import React, { useState } from "react";
import dayjs from "dayjs";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { Button, DeleteButtonContainer, Input, Separator, UpdateModal, DeleteButtonModal, Icons } from "../../../components";
import { faTimes, faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  ButtonBox, 
  Recipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer,
  Text,
  ModalMessage,
  ModalcloseButtom,
  ModalButtomContainer
} from "./styles";
import { useAuth } from "../../../hooks/useAuth";


function Dragons({item, isClicked, setIsClicked, setModified}) {
  const [modal, setModal] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
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
    setIsUpdate(false)
    setModified(false)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  function handleEditButton() {
    setModified(true)
    setIsUpdate(true)
  }

  function handleCancelButton() {
    setModified(false)
    setIsUpdate(false)
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
        <Recipe>
          <DateContainer>
            {dayjs(item.createdAt).format('DD/MM/YYYY')}
          </DateContainer>
        </Recipe>
        <Recipe>
          <NameContainer>
            {item.name}
          </NameContainer>
        </Recipe>
        <Recipe>
          <TypeContainer>
            {item.type}
          </TypeContainer>
        </Recipe>
        <ButtonBox>
          <Button onClick={handleEditButton} edit>
            <Icons icon={faPencilAlt} list hoverColor={'green'}/>
          </Button>
          <Separator />
          <DeleteButtonContainer>
            <Button onClick={() => setModal(true)} del>
              <Icons icon={faTrashAlt} list hoverColor={'#990000'}/>
            </Button>
          </DeleteButtonContainer>
        </ButtonBox>
        <UpdateModal 
          isUpdate={isUpdate} 
          setIsUpdate={setIsUpdate} 
          handleCancelButton={handleCancelButton}
        >
          <Recipe>
            <DateContainer>
              {dayjs(item.updatedAt).format('DD/MM/YYYY')}
            </DateContainer>
          </Recipe>
          <Recipe>
            <Input
              onChange={handleChange}
              id='newName'
              type='text'
              list
              value={updatedDragon.newName}
            />
          </Recipe>
          <Recipe>
            <Input 
              onChange={handleChange} 
              id='newType'
              type='text'
              list
              value={updatedDragon.newType}
            />
          </Recipe>
          <ButtonBox>
            <Button onClick={() => handleUpdate(item.id)} edit >
              <Icons icon={faCheck} list hoverColor={'green'}/> 
            </Button>
            <Separator />
            <Button onClick={handleCancelButton} edit>
              <Icons icon={faTimes} list hoverColor={'#5555ff'}/>
            </Button>
          </ButtonBox>
        </UpdateModal>
        <DeleteButtonModal modal={modal} setModal={setModal}>
          <ModalMessage>
            <Text>Esta ação ira apagar o Dragão permanentemente!</Text>  
            <Text>This will delete the Dragon permanently!</Text>
          </ModalMessage>
          <ModalButtomContainer>
            <ModalcloseButtom>
              < Button 
                onClick={() => setModal(false)}
                x={17} 
                y={17} 
                custom
              >
                <Icons icon={faTimes}/>
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