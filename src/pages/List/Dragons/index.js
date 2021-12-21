import dayjs from "dayjs";
import React, { useState } from "react";
import { Button, Input, Separator } from "../../../components";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { 
  ButtonBox, 
  Recipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer
} from "./styles";

function Dragons({item, isClicked, setIsClicked, isDate, setIsDate}) {
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
    setIsDate(!isDate)
  }

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedDragon({...updatedDragon, [id]: value})
  }

  function handleUpdating() {
    setIsDate(!isDate)
    setIsUpdate(!isUpdate)
    setUpdatedDragon({
      newName: item.name,
      newType: item.type
    })
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
          <Button 
            onClick={() => handleUpdate(item.id)} 
            text={'finalizar'} 
            bordrad={40}
          />
          <Button 
            onClick={handleUpdating} 
            text={'cancelar'} 
            bordrad={40}
          />
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
          <Button 
            onClick={handleUpdating} 
            text={'editar'} 
            bordrad={40} 
            x={42}
          />
          <Button 
            onClick={() => handleDelete(item.id)} 
            text={'deletar'} 
            bordrad={40} 
            x={46}
          />
        </ButtonBox>
      </>  
      )}
      </DragonsContainer>
      <Separator />
    </>
  )
}

export default Dragons