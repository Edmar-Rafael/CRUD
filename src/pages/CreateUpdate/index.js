import React, { useState } from 'react'
import { createDragon } from '../../services/dragon'
import { useHistory } from 'react-router'
import { Button, Separator } from '../../components'
import { useAuth } from '../../hooks/useAuth'
import { Container, Header, Input } from './styles'

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
         <Separator y={150}/>
         <Input 
            onChange={(e) => setDragonName(e.target.value)} 
            type='text'
            placeholder='Nome*' 
            value={dragonName}
         />
         <Separator />
         <Input 
            onChange={(e) => setDragonType(e.target.value)} 
            type='text'
            placeholder='Tipo*' 
            value={dragonType} 
         />
         <Separator />
         <Button custom text={'CADASTRAR'} x={308} onClick={createNewDragon}/>
      </Container>
   )
}

export default CreateUpdate