import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dragons from './Dragons'
import { Container, SkeletonLoading } from '../../components'
import { DragonsHeader, Recipe, RecipeContainer } from './styles'
import { useAuth } from '../../hooks/useAuth';


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

   const notify = {
      success: () => toast.success('Dragão modificado com sucesso!'),
      error: () => toast.error('Oops! Nome ou tipo não inseridos'),
      info: () => toast.info('Sem alterações!')
   }


   return (
      <Container list>
         <ToastContainer theme='colored' position='top-center' closeOnClick/>
         <DragonsHeader>
            <RecipeContainer >
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
               notify={notify}
               item={dragon}
            />
         ))}
      </Container>
   )
}

export default DragonsList