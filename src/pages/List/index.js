import React, { useEffect, useState } from 'react'
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
import handleLanguage from '../../resources/LangSource';


function DragonsList() {
   const [searchTerm, setSearchTerm] = useState('')
   const [isClicked, setIsClicked] = useState(false)
   const [chunk, setChunk] = useState(5);
   const { data, loading } = useSelector(({dragonsState}) => dragonsState)
   useSelector(({changeLanguageState}) => changeLanguageState)
   const dispatch = useDispatch()
   
   const filteredDragon = data.filter(dragon => {
      if(
         dragon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         dragon.type.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
         return dragon
      }
      return dragon
   })

   useEffect(() => {
      dispatch(requestDragons())
   },
   [dispatch, isClicked, searchTerm])

   
   return (
      <Container list='true'>
         <Separator y={80}/>
         <ListContainer>
            <InputLabelContainer search='true'>
               <Input 
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type={'text' || 'password'} 
                  placeholder={handleLanguage('searchByName')}
                  value={searchTerm}
                  search_dragon='true'
               />
               <FloatingLabel text={handleLanguage('search')} search='true'/>
               <Icons icon={faSearch} fa_search='true'/>
               <Separator y={23}/>
            </InputLabelContainer>
            <DragonsHeader >
               <RecipeContainer >
                  <Recipe >{handleLanguage('date')}</Recipe>
               </RecipeContainer>
               <RecipeContainer>
                  <Recipe>{handleLanguage('name')}</Recipe>
               </RecipeContainer>
               <RecipeContainer>
                  <Recipe>{handleLanguage('type')}</Recipe>
               </RecipeContainer>
            </DragonsHeader>
            {loading ? (
               <SkeletonLoading />
            ) : (
            data && filteredDragon
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
                  <Icons icon={faChevronLeft} fa_chevron='true'/>
               </Button>
            )}
            <FooterIcons> - 5 + </FooterIcons>
            {chunk < data.length ? (
               <Button onClick={() => setChunk(chunk + 5)}>
                  <Icons icon={faChevronLeft} rotation={180}/>
               </Button>
            ) : (
               <Button footer>
                  <Icons icon={faChevronLeft} rotation={180} fa_chevron='true'/>
               </Button>
            )}
            </ListFooterButtonBox>
         </ListFooter>
      </Container>
   )
}

export default DragonsList