import React, { useState } from "react";
import dayjs from "dayjs";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { Button, DeleteButtonContainer, Input, Modal, Separator } from "../../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  ButtonBox, 
  Recipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer
} from "./styles";
import { useAuth } from "../../../hooks/useAuth";


function Dragons({item, isClicked, setIsClicked, setModified, modal, setModal}) {
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

  function handleEditButtom() {
    setModified(true)
    setIsUpdate(true)
  }

  function handleCancelButtom() {
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
    setModal(false)
  }


  return (
    <>
      <DragonsContainer >
      {isUpdate ? (      
      <>
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
            <FontAwesomeIcon icon={faCheck} size={'2x'} className="edit-btn"/> 
          </Button>
          <Separator />
          <Button onClick={handleCancelButtom} edit>
            <FontAwesomeIcon icon={faTimes} size={'2x'} className="cancel-btn"/>
          </Button>
        </ButtonBox>
      </>
      ) : (
      <>
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
          <Button onClick={handleEditButtom} edit>
            <FontAwesomeIcon icon={faPencilAlt} size={'2x'} className="edit-btn"/>
          </Button>
          <Separator />
          <DeleteButtonContainer>
            <Button onClick={() => setModal(true)} del>
              <FontAwesomeIcon icon={faTrashAlt} size={'2x'} className="del-btn"/>
            </Button>
          </DeleteButtonContainer>
        </ButtonBox>
      </>  
      )}
        <Modal item={item} modal={modal} setModal={setModal}>
          <DeleteButtonContainer>
            <Button onClick={() => handleDelete(item.id)} del>
              <FontAwesomeIcon icon={faTrashAlt} size={'2x'} className='del-btn'/>
            </Button>
          </DeleteButtonContainer>
        </Modal>
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons