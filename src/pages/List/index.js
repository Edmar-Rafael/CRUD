import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dragons from './Dragons'
import { useSelector, useDispatch } from 'react-redux';
import { requestDragons } from '../../store/ducks/dragonsList'
import { 
   Button, 
   Container, 
   FloatingLabel, 
   Icons, 
   Input, 
   InputLabelContainer, 
   Separator, 
   SkeletonLoading 
} from '../../components'
import { 
   DragonsHeader, 
   FooterIcons, 
   ListContainer, 
   ListFooter, 
   ListFooterButtonBox, 
   Recipe, 
   RecipeContainer 
} from './styles'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';


function DragonsList() {
   const [searchTerm, setSearchTerm] = useState('')
   const [isClicked, setIsClicked] = useState(false)
   const [chunk, setChunk] = useState(5);
   const data = useSelector(({dragonsState}) => dragonsState.data)
   const loading = useSelector(({dragonsState}) => dragonsState.loading)
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(requestDragons())
   },
   [dispatch, isClicked, searchTerm])


   return (
      <Container list>
         <Separator y={80}/>
         <ToastContainer theme='colored' position='top-center' closeOnClick/>
         <ListContainer>
            <InputLabelContainer search>
               <Input 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type={'text' || 'password'} 
                  placeholder='Busca por Nome'
                  value={searchTerm}
                  search_dragon
                  x={95}
               />
               <FloatingLabel text={'Busca/Search'} search/>
               <Icons icon={faSearch} fa_search/>
               <Separator y={23}/>
            </InputLabelContainer>
            <DragonsHeader >
               <RecipeContainer>
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
               <SkeletonLoading />
            ) : (
            data && data
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
            <ListFooterButtonBox>
            {chunk > 5 ? (
               <Button onClick={() => setChunk(chunk - 5)} >
                  <Icons icon={faChevronLeft}/>
               </Button> 
            ) : (
               <Button footer>
                  <Icons icon={faChevronLeft} fa_chevron/>
               </Button>
            )}
            <FooterIcons> - 5 + </FooterIcons>
            {chunk < data.length ? (
               <Button onClick={() => setChunk(chunk + 5)}>
                  <Icons icon={faChevronLeft} rotation={180}/>
               </Button>
            ) : (
               <Button footer>
                  <Icons icon={faChevronLeft} rotation={180} fa_chevron/>
               </Button>
            )}
            </ListFooterButtonBox>
         </ListFooter>
      </Container>
   )
}

export default DragonsList