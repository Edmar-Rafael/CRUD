import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { Container } from '../../components'
import Dragons from './Dragons'
import { DragonsHeader, Recipe, RecipeContainer } from './styles'


function DragonsList() {
   const [dragons, setDragons] = useState()
   const [isDate, setIsDate] = useState(false)
   const [isClicked, setIsClicked] = useState(false)
   

   useEffect(() => {
      async function fetchDragons() {
         const {data} = await getDragons()
         setDragons(data)
      }
      fetchDragons()
   },
   [isClicked])


   return (
      <Container list>
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
               setIsDate={setIsDate}
               item={dragon}
            />
         )}
      </Container>
   )
}

export default DragonsList