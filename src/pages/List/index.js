import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router'
import { Separator, Button } from '../../components'
import Dragons from './Dragons'
import { Container, Header } from './styles'


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
            <Dragons 
               key={dragon.id}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               item={dragon}/>)}
      </Container>
   )
}

export default DragonsList