import React, { useState } from 'react'
import { createDragon } from '../../services/dragon'
import { useHistory } from 'react-router'
import { Button, Separator, Input, InputLabelContainer, Wrapper } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import { Container, Header } from './styles'
import FloatingLabel from '../../components/FloatingLabel'


function CreateUpdate() {
   const [dragonName, setDragonName] = useState('')
   const [dragonType, setDragonType] = useState('')
   const history = useHistory()
   const {logOut} = useAuth()

   async function createNewDragon() {
      await createDragon({
         name: `${dragonName}`,
         type: `${dragonType}`
      }) 
      history.goBack()
   }


   return (
      <Container>
         <Separator />
         <Header> 
            <Button onClick={() => history.push('/')} custom text={'VOLTAR'} />
            <Button onClick={logOut} custom text={'SAIR'} />
         </Header>
         <Separator y={80}/>
         <Wrapper create>
         <InputLabelContainer x={310}>
            <Input
               onChange={(e) => setDragonName(e.target.value)} 
               type='text'
               placeholder='Ex: valentine*' 
               create
               value={dragonName}
            />
            <FloatingLabel text={'Nome*'}/>
            <Separator y={23}/>
         </InputLabelContainer>
         <InputLabelContainer x={310}>
            <Input 
               onChange={(e) => setDragonType(e.target.value)} 
               type='text'
               placeholder='ex: vermelho/red*' 
               create
               value={dragonType} 
            />
            <FloatingLabel text={'Tipo*'}/>
            <Separator y={23}/>
         </InputLabelContainer>
         <Separator />
         <Button custom text={'CADASTRAR'} x={308} onClick={createNewDragon}/>
         </Wrapper>
      </Container>
   )
}

export default CreateUpdate