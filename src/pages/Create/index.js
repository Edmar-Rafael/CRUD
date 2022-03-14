import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
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
import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { requestCreateDragon } from '../../store/ducks/creating';


function Create() {
   const [newDragon, setNewDragon] = useState({
      name: '',
      type: ''
   })
   const loading = useSelector(({createDragonState}) => createDragonState.loading)
   
   const dispatch = useDispatch()

   const {notify} = useAuth()
   const history = useHistory()

   async function createNewDragon() {
      try {
         if(newDragon.name !== '' && newDragon.type !== '') {
            await dispatch(requestCreateDragon({
               name: `${newDragon.name}`,
               type: `${newDragon.type}`
            }))
            history.goBack()
         }
         else {
            notify.error()
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
                  placeholder='Ex: valentine*' 
                  create
                  value={newDragon.name}
               />
               <FloatingLabel text={'Nome*'}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <InputLabelContainer x={310}>
               <Input 
                  onChange={handleNewDragon} 
                  x={45}
                  id='type'
                  type='text'
                  placeholder='Ex: vermelho/red*' 
                  create
                  value={newDragon.type} 
               />
               <FloatingLabel text={'Tipo*'}/>
               <Separator y={23}/>
            </InputLabelContainer>
            <Separator />
            <Button 
               onClick={createNewDragon} 
               type= 'buttom'
               custom 
               text={'CADASTRAR'} 
               x={310} 
            />
         </Wrapper>
      )}
         <ToastContainer theme='colored' position='bottom-center'/>
      </Container>
   )
}

export default Create