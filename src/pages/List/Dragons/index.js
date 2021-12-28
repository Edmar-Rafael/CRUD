import React, { useState } from "react";
import dayjs from "dayjs";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { Button, DeleteButtonContainer, Input, Separator } from "../../../components";
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


function Dragons({item, isClicked, setIsClicked, setModified}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedDragon, setUpdatedDragon] = useState({
    newName: item.name,
    newType: item.type
  })

  async function handleSubmitUpdate(id) {
    await updateDragon(id, {
      name: `${updatedDragon.newName}`,
      type: `${updatedDragon.newType}`
    })
    setIsClicked(!isClicked)
    setIsUpdate(false)
    setModified(false)
  }

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  function handleEditButtom(event) {
    event.preventDefault()
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
          <Button  edit >
            <FontAwesomeIcon onClick={() => handleSubmitUpdate(item.id)} icon={faCheck} size={'2x'} className="dragons"/> 
          </Button>
          <Separator />
          <Button onClick={handleCancelButtom} edit>
            <FontAwesomeIcon icon={faTimes} size={'2x'} className="cancel"/>
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
            <FontAwesomeIcon icon={faPencilAlt} size={'2x'} className="dragons"/>
          </Button>
          <Separator />
          <DeleteButtonContainer>
          <Button onClick={() => handleDelete(item.id)} del>
            <FontAwesomeIcon icon={faTrashAlt} size={'2x'} className="del"/>
          </Button>
          </DeleteButtonContainer>
        </ButtonBox>
      </>  
      )}
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons