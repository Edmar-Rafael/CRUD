import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
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
      if(newDragon.name !== '' && newDragon.type !== '') {
         await dispatch(requestCreateDragon({
            name: `${newDragon.name}`,
            type: `${newDragon.type}`
         }))
         history.goBack()
      } else {
         toast.error(handleLanguage('createError'))
      }
   }

   function handleNewDragon(event) {
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
                  x={55}
                  id='name'
                  type='text'
                  placeholder={handleLanguage('exName')} 
                  create
                  value={newDragon.name}
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
                  create
                  value={newDragon.type} 
               />
               <FloatingLabel text={handleLanguage('createType')}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <Separator />
            <Button 
               onClick={createNewDragon} 
               type= 'buttom'
               custom 
               text={handleLanguage('register')} 
               x={310} 
            />
         </Wrapper>
      )}
         <ToastContainer theme='colored' position='bottom-center'/>
      </Container>
   )
}

export default Create