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
   }


   return (
      <Container>
         <Separator />
         <Header> 
            <Button custom text={'VOLTAR'} onClick={() => history.push('/')}/>
            <Button custom text={'SAIR'} onClick={logOut}/>
         </Header>
         <Separator y={150}/>
         <Input placeholder='Nome*' value={dragonName} onChange={(e) => setDragonName(e.target.value)}/>
         <Separator />
         <Input placeholder='Tipo*' value={dragonType} onChange={(e) => setDragonType(e.target.value)}/>
         <Separator />
         <Button custom text={'CADASTRAR'} x={308} onClick={createNewDragon} />
      </Container>
   )
}

export default CreateUpdate