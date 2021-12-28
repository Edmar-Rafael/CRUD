import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { Container, SkeletonLoading } from '../../components'
import Dragons from './Dragons'
import { DragonsHeader, Recipe, RecipeContainer } from './styles'


function DragonsList() {
   const [dragons, setDragons] = useState()
   const [modified, setModified] = useState(false)
   const [loading, setLoading] = useState(false)
   const [isClicked, setIsClicked] = useState(false)
   

   useEffect(() => {
      async function fetchDragons() {
         setLoading(true)
         const {data} = await getDragons()
         setDragons(data)
         setLoading(false)
      }
      fetchDragons()
   },
   [isClicked])


   return (
      <Container list>
         <DragonsHeader>
            <RecipeContainer>
               <Recipe>{modified ? 'modificado em/Modified at' : 'Data/Date'}</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Nome/Name</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Tipo/Type</Recipe>
            </RecipeContainer>
         </DragonsHeader>
         {loading ? (
            <SkeletonLoading newSize={7}/>
            ) : (
            dragons && dragons.map(dragon => 
            <Dragons 
               key={dragon.id}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               setModified={setModified}
               item={dragon}
            />
         ))}
      </Container>
   )
}

export default DragonsList