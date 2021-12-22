import dayjs from "dayjs";
import React, { useState } from "react";
import { Button, Input, Separator } from "../../../components";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheck, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { 
  ButtonBox, 
  Recipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer
} from "./styles";

function Dragons({item, isClicked, setIsClicked, setIsDate}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedDragon, setUpdatedDragon] = useState({
    newName: item.name,
    newType: item.type
  })

  async function handleUpdate(id) {
    await updateDragon(id, {
      name: `${updatedDragon.newName}`,
      type: `${updatedDragon.newType}`
    })
    setIsClicked(!isClicked)
    setIsUpdate(false)
    setIsDate(false)
  }

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  function handleEditButtom() {
    setIsDate(true)
    setIsUpdate(true)
    setUpdatedDragon({
      newName: item.name,
      newType: item.type
    }) 
  }

  function handleCancelButtom() {
    setIsDate(false)
    setIsUpdate(false)
  }


  return (
    <>
      <DragonsContainer>
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
            <FontAwesomeIcon icon={faCheck} size={'2x'}/> 
          </Button>
          <Button 
            onClick={handleCancelButtom} 
            edit
          >
            <FontAwesomeIcon icon={faTimesCircle} size={'2x'}/>
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
            <FontAwesomeIcon icon={faPencilAlt} size={'2x'}/>
          </Button>
          <Button onClick={() => handleDelete(item.id)} edit>
            <FontAwesomeIcon icon={faTrashAlt} size={'2x'}/>
          </Button>
        </ButtonBox>
      </>  
      )}
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons