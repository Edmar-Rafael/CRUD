import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import { useDispatch, useSelector } from 'react-redux';
import { requestCreateDragon } from '../../store/ducks/creating';
import handleLanguage from '../../resources/LangSource';


function Create() {
   const [newDragon, setNewDragon] = useState({
      name: '',
      type: ''
   })
   const {loading} = useSelector(({createDragonState}) => createDragonState)
   useSelector(({changeLanguageState}) => changeLanguageState)
   const history = useHistory()

   const dispatch = useDispatch()

   async function createNewDragon() {
      try{
         if(newDragon.name !== '' && newDragon.type !== '') {
            await dispatch(requestCreateDragon({
               name: `${newDragon.name}`,
               type: `${newDragon.type}`
            }))
            history.goBack()
            toast.success(handleLanguage('createSuccess'), {position: 'bottom-center'})
         } else {
            toast.error(handleLanguage('createError'), {position: 'bottom-center'})
         }
      } catch(error) {
         return error
      }
   }

   function handleNewDragon(event) {
      const {id, value} = event.target
      setNewDragon({...newDragon, [id]: value})
   }


   return (
      <Container homeCreate='true' >
      {loading ? (
         <LoaderSpinner />
      ) : (
         <Wrapper create='true' >
            <InputLabelContainer x={310}>
               <Input
                  onChange={handleNewDragon} 
                  x={55}
                  id='name'
                  type='text'
                  placeholder={handleLanguage('exName')} 
                  value={newDragon.name}
                  create='true'
               />
               <FloatingLabel text={handleLanguage('createName')}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <InputLabelContainer x={310}>
               <Input 
                  onChange={handleNewDragon} 
                  x={45}
                  id='type'
                  type='text'
                  placeholder={handleLanguage('exRed')} 
                  value={newDragon.type} 
                  create='true'
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
               custom='true'
            />
         </Wrapper>
      )}
      </Container>
   )
}

export default Create