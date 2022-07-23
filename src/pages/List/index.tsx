import React, { useEffect, useState } from 'react'
import Dragons from './Dragons'
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
import { DragonsListProps, useAppDispatch, useAppSelector } from '../../@types/types';


function DragonsList() {
   const [searchTerm, setSearchTerm] = useState('')
   const [isClicked, setIsClicked] = useState(false)
   const [chunk, setChunk] = useState(5);
   
   const { data: dragonsData, loading }: DragonsListProps = useAppSelector(
      ({dragonsState}) => dragonsState
   )
   useAppSelector(({changeLanguageState}) => changeLanguageState)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(requestDragons())
   }, [dispatch, isClicked])

   const filteredDragon = dragonsData.filter(dragon => {
      return (
         dragon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         dragon.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
   })

   let delay: NodeJS.Timeout

   function delayedDebounce(event: React.ChangeEvent<HTMLInputElement>) {
      clearTimeout(delay)
      delay = setTimeout(() => {
         setSearchTerm(event.target.value)
      }, 1000);
   }


   return (
      <Container list>
         <Separator y={80}/>
         <ListContainer>
            <InputLabelContainer search>
               <Input 
                  onChange={delayedDebounce}
                  type={'text'} 
                  placeholder={handleLanguage('searchByName')}
                  search_dragon
               />
               <FloatingLabel text={handleLanguage('search')} search/>
               <Icons faIcon={faSearch} fa_search/>
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
               dragonsData && filteredDragon
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
                  <Icons faIcon={faChevronLeft}/>
               </Button> 
            ) : (
               <Button footer>
                  <Icons faIcon={faChevronLeft} fa_chevron />
               </Button>
            )}
            <FooterIcons> - 5 + </FooterIcons>
            {chunk < dragonsData.length ? (
               <Button onClick={() => setChunk(chunk + 5)}>
                  <Icons faIcon={faChevronLeft} rotation={180}/>
               </Button>
            ) : (
               <Button footer>
                  <Icons faIcon={faChevronLeft} rotation={180} fa_chevron />
               </Button>
            )}
            </ListFooterButtonBox>
         </ListFooter>
      </Container>
   )
}

export default DragonsList