import React, { useEffect, useState } from 'react'
import { Container, Header, DateContainer, DragonName, DragonsContainer, Type } from './styles'
import { getDragons } from '../../services/dragon'
import { Separator, Row, Button } from '../../components'
import dayjs from 'dayjs'

function DragonsList() {
   const [dragons, setDragons] = useState()

   useEffect(() => {
      async function fetchDragons() {
         const {data} = await getDragons()
         setDragons(data)
      }
      fetchDragons()
   },
   )

   return (
      <Container>
         <Separator height={6}/>
         <Header>
            <Button width={125}>
               CRIAR DRAGÃO
            </Button>
            <Button>
               SAIR
            </Button>
         </Header>
         <Separator height={30}/>
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
            </DragonsContainer>
            <Separator height={9} color={'red'}/>
         </>
         )}
      </Container>
   )
}

export default DragonsList