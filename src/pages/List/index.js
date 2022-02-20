import React, { useEffect, useState } from 'react'
import { getDragons } from '../../services/dragon'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dragons from './Dragons'
import { Button, Container, FloatingLabel, Icons, Input, InputLabelContainer, Separator, SkeletonLoading } from '../../components'
import { DragonsHeader, ListContainer, ListFooter, ListHeader, Recipe, RecipeContainer } from './styles'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function DragonsList() {
   const [dragons, setDragons] = useState([])
   const [loading, setLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')
   const [isClicked, setIsClicked] = useState(false)
   const [chunk, setChunk] = useState(5);
   
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

   console.log(chunk, dragons.length)


   return (
      <Container list>
         <ListContainer>
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
         </DragonsHeader>
         {loading ? (
            <SkeletonLoading newSize={7}/>
         ) : (
         dragons && dragons
            .filter(dragon => dragon.name.toLowerCase().indexOf(searchTerm) > -1)
            .slice(chunk - 5, chunk)
            .map(dragon =>
            <Dragons 
               key={dragon.id}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               item={dragon}
            />
         ))}
         </ListContainer>
         <ListFooter>
            {chunk > 5 ?
               <Button onClick={() => setChunk(chunk - 5)} text={'Voltar/Back 5 '}/> 
               :  <Button text={'Voltar/Back 5'} custom style={{color:'#dddddd66',background:'#111111'}}/>
            }
            {dragons.length > chunk ?
               <Button onClick={() => setChunk(chunk + 5)} text={'Próximos/Next 5 '}/> 
               : <Button text={'Próximos/Next 5'} style={{color:'#dddddd66',background:'#111111'}}/>
            }
            </ListFooter>
      </Container>
      
   )
}

export default DragonsList