import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router'
import { Separator, Button, Container } from '../../components'
import Dragons from './Dragons'
import { DragonsHeader, Header, Recipe, RecipeContainer } from './styles'


function DragonsList() {
   const [dragons, setDragons] = useState()
   const [isDate, setIsDate] = useState(false)
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
         <DragonsHeader>
            <RecipeContainer>
            {isDate ? (
               <Recipe>Modificado em/Modified at</Recipe>
               ) : (
               <Recipe>Data/Date</Recipe>
            )}
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Nome/Name</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Tipo/Type</Recipe>
            </RecipeContainer>
         </DragonsHeader>
         {dragons && dragons.map(dragon => 
            <Dragons 
               key={dragon.id}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               isDate={isDate}
               setIsDate={setIsDate}
               item={dragon}
            />
         )}
      </Container>
   )
}

export default DragonsList