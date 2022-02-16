import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dragons from './Dragons'
import { Container, FloatingLabel, Icons, Input, InputLabelContainer, Separator, SkeletonLoading } from '../../components'
import { DragonsHeader, Recipe, RecipeContainer } from './styles'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function DragonsList() {
   const [dragons, setDragons] = useState([])
   const [loading, setLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')
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
   [isClicked, searchTerm])


   return (
      <Container list>
         <ToastContainer theme='colored' position='top-center' closeOnClick/>
         <InputLabelContainer search>
            <Input 
               onChange={(e) => setSearchTerm(e.target.value)}
               type='text' 
               placeholder='Busca por Nome'
               value={searchTerm}
               search_dragon
            />
            <FloatingLabel text={'Busca/Search'} search/>
            <Icons icon={faSearch} fa_search/>
            <Separator y={23}/>
         </InputLabelContainer>
         <DragonsHeader >
            <RecipeContainer >
               <Recipe >Data/</Recipe>
               <Recipe>Date</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Nome/</Recipe>
               <Recipe>Name</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               <Recipe>Tipo/</Recipe>
               <Recipe>Type</Recipe>
            </RecipeContainer>
            <RecipeContainer>
               
            </RecipeContainer>
         </DragonsHeader>
         {loading ? (
            <SkeletonLoading newSize={7}/>
         ) : (
         dragons && dragons
            .filter(dragon => dragon.name.indexOf(searchTerm) > -1)
            .map(dragon =>
            <Dragons 
               key={dragon.id}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               item={dragon}
            />
         ))}
      </Container>
   )
}

export default DragonsList