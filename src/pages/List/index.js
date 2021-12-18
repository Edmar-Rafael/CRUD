import React, { useEffect, useState } from 'react'
import { deleteDragon, getDragons, updateDragon } from '../../services/dragon'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router'
import { Separator, Button, Input } from '../../components'
import dayjs from 'dayjs'
import {
    Container, 
    Header, 
    DateContainer, 
    DragonsContainer, 
    NameContainer,
    TypeContainer,
    Recipe,
    ButtonBox} from './styles'


function DragonsList() {
   const [dragons, setDragons] = useState()
   const [isUpdate, setIsUpdate] = useState(true)
   const [isClicked, setIsclicked] = useState()
   const [updatedName, setUpdatedName] = useState('')
   const [updatedType, setUpdatedType] = useState('')
   const history = useHistory()

   const { logOut } = useAuth()

   useEffect(() => {
      async function fetchDragons() {
         const {data} = await getDragons()
         setDragons(data)
      }
      fetchDragons()
   },
   [isClicked, isUpdate])


   async function handleUpdate(id) {
      await updateDragon(id,{
         name: `${updatedName}`,
         type: `${updatedType}`
      })
      setIsUpdate(!isUpdate)
      setUpdatedName('')
      setUpdatedType('')
   }

   async function handleDelete(id) {
      await deleteDragon(id)
      setIsclicked(!isClicked)
   }


   return (
      <Container>
         <Separator y={12}/>
         <Header>
            <Button 
               text={'CRIAR DRAGÃO'} 
               x={118} 
               custom 
               onClick={() => history.push('/create')}
            />
            <Button text={'SAIR'} custom onClick={logOut}/>               
         </Header>
         <Separator y={20}/>
         {dragons && dragons.map(dragon =>
         <>
            <DragonsContainer>
               <DateContainer>
                  {dayjs(dragon.createdAt).format('DD/MM/YYYY')}
               </DateContainer>
               <NameContainer>
               {isUpdate ? (
                  <Recipe>
                     {dragon.name}
                  </Recipe>
                  ) : (
                  <Input
                     onChange={(e) => setUpdatedName(e.target.value)}
                     id={dragon.id}
                     type='text'
                     placeholder={dragon.name}
                     value={updatedName} 
                  />
               )}
               </NameContainer>
               <TypeContainer>
               {isUpdate ? (
                  <Recipe>
                     {dragon.type}
                  </Recipe> 
                  ) : (
                  <Input 
                     onChange={(e) => setUpdatedType(e.target.value)}
                     id={dragon.id}
                     type='text'
                     placeholder={dragon.type}
                     value={updatedType}
                  />
               )}
               </TypeContainer>
               <ButtonBox>
               {isUpdate ? (
                  <Button
                     onClick={() => setIsUpdate(!isUpdate)}
                     text={'editar'}
                     x={45}
                     bordrad={20}
                  />
                  ) : (
                  <Button onClick={() => handleUpdate(dragon.id)} text={'finalizar'}/>
               )}
                  <Button 
                     text={'deletar'}
                     x={45}
                     bordrad={40}
                     onClick={()=> handleDelete(dragon.id)}
                  />
               </ButtonBox>    
            </DragonsContainer>
            <Separator y={9}/>
         </>
         )}
      </Container>
   )
}

export default DragonsList