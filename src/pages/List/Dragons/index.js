import dayjs from "dayjs";
import React, { useState } from "react";
import { Button, Input, Separator } from "../../../components";
import { deleteDragon, updateDragon } from "../../../services/dragon";
import { 
  ButtonBox, 
  Container, 
  Recipe, 
  DragonsContainer, 
  NameContainer, 
  TypeContainer, 
  DateContainer
} from "./styles";

function Dragons({item, isClicked, setIsClicked}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedDragon, setUpdatedragon] = useState({
    newName: '',
    newType: ''
  })

  async function handleUpdate(id) {
    await updateDragon(id, {
      name: `${updatedDragon.newName}`,
      type: `${updatedDragon.newType}`
    })

    setIsClicked(!isClicked)
    setIsUpdate(false)
  }

  async function handleDelete(id) {
    await deleteDragon(id)
    setIsClicked(!isClicked)
  }

  function handleChange(event) {
    const {id, value} = event.target
    setUpdatedragon({...updatedDragon, [id]: value})
  }

  return (
    <Container>
      <Separator />
      <DragonsContainer>
      {isUpdate ? (      
      <>
        <Recipe>
          <DateContainer>
            {item.updatedAt}
          </DateContainer>
        </Recipe>
        <Recipe>
          <Input
            onChange={handleChange}
            id='newName'
            type='text'
            value={updatedDragon.newName}
          />
        </Recipe>
        <Recipe>
          <Input 
            onChange={handleChange}
            id='newType'
            type='text'
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
            onClick={() => setIsUpdate(false)} 
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
            onClick={() => setIsUpdate(true)} 
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
    </Container>
  )
}

export default Dragons