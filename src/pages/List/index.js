import React, { useEffect, useState } from 'react'
import { deleteDragon, getDragons } from '../../services/dragon'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router'
import { Separator, Button } from '../../components'
import dayjs from 'dayjs'
import {
    Container, 
    Header, 
    DateContainer, 
    DragonName, 
    DragonsContainer, 
    Type } from './styles'


function DragonsList() {
   const [dragons, setDragons] = useState()
   const [isClicked, setIsClicked] = useState(false)
   const history = useHistory()

   const { logOut } = useAuth()

   useEffect(() => {
      async function fetchDragons() {
         const {data} = await getDragons()
         setDragons(data)
      }
      fetchDragons()
   },
   [isClicked])

   async function handleDelete(id) {
      await deleteDragon(id)
      setIsClicked(!isClicked)
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
               <DragonName>
                  {dragon.name}
               </DragonName>
               <Type>
                  {dragon.type}
               </Type>
               <Button 
                  text={'editar'} 
                  x={45}
                  bordrad={20} 
               />
               <Separator />
               <Button 
                  text={'deletar'} 
                  x={45} 
                  bordrad={40}
                  onClick={()=> handleDelete(dragon.id)} 
               />    
            </DragonsContainer>
            <Separator y={9}/>
         </>
         )}
      </Container>
   )
}

export default DragonsList