import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
   import { 
   Button, 
   Separator, 
   Input, 
   InputLabelContainer, 
   Wrapper, 
   FloatingLabel, 
   Container,
   LoaderSpinner
} from '../../components'
import { requestCreateDragon } from '../../store/ducks/creating';
import handleLanguage from '../../resources/LangSource';
import { useAppDispatch, useAppSelector } from '../../@types/types';


function Create() {
   const [newDragon, setNewDragon] = useState({
      name: '',
      type: ''
   })
   const {loading} = useAppSelector(({createDragonState}) => createDragonState)
   useAppSelector(({changeLanguageState}) => changeLanguageState)
   const navigate = useNavigate()

   const dispatch = useAppDispatch()

   async function createNewDragon() {
      if(newDragon.name !== '' && newDragon.type !== '') {
         await dispatch(requestCreateDragon({
            name: `${newDragon.name}`,
            type: `${newDragon.type}`
         }))
         navigate('/')
         toast.success(handleLanguage('createSuccess'), {position: 'bottom-center'})
      } else {
         toast.error(handleLanguage('createError'), {position: 'bottom-center'})
      }
   }

   function handleNewDragon(event: React.ChangeEvent<HTMLInputElement>) {
      const {id, value} = event.target
      setNewDragon({...newDragon, [id]: value})
   }


   return (
      <Container homeCreate >
      {loading ? (
         <LoaderSpinner />
      ) : (
         <Wrapper create >
            <InputLabelContainer x={310}>
               <Input
                  onChange={handleNewDragon} 
                  id='name'
                  type='text'
                  placeholder={handleLanguage('exName')} 
                  value={newDragon.name}
                  create
               />
               <FloatingLabel text={handleLanguage('createName')}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <InputLabelContainer x={310}>
               <Input 
                  onChange={handleNewDragon} 
                  id='type'
                  type='text'
                  placeholder={handleLanguage('exRed')} 
                  value={newDragon.type} 
                  create
               />
               <FloatingLabel text={handleLanguage('createType')}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <Separator />
            <Button 
               onClick={createNewDragon} 
               type= 'buttom'
               text={handleLanguage('register')} 
               x={310} 
               custom
            />
         </Wrapper>
      )}
      </Container>
   )
}

export default Create