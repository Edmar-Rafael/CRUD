import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
   import { 
   Button, 
   Separator, 
   Input, 
   Wrapper, 
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
   const dispatch = useAppDispatch()
   useAppSelector(({changeLanguageState}) => changeLanguageState)

   const navigate = useNavigate()

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
               <Input
                  onChange={handleNewDragon} 
                  id='name'
                  type='text'
                  placeHolder={handleLanguage('exName')} 
                  label={handleLanguage('createName')}
                  value={newDragon.name}
                  create
               />
               <Input 
                  onChange={handleNewDragon} 
                  id='type'
                  type='text'
                  placeHolder={handleLanguage('exRed')} 
                  label={handleLanguage('createType')}
                  value={newDragon.type} 
                  create
               />
            <Separator />
            <Button 
               onClick={createNewDragon} 
               type= 'buttom'
               text={handleLanguage('toCreate')} 
               custom
            /> 
         </Wrapper>
      )}
      </Container>
   )
}

export default Create