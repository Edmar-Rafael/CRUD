import React, { useState } from 'react'
import { createDragon } from '../../services/dragon'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function CreateUpdate() {
   const [isSpinner, setIsSpinner] = useState(false)
   const [newDragon, setNewDragon] = useState({
      name: '',
      type: ''
   })
   const history = useHistory()

   const {notify} = useAuth()

   async function createNewDragon() {
      if(newDragon.name === '' || newDragon.type === '') {
         notify.error()
      }
      else {
         setIsSpinner(true)
         await createDragon({
            name: `${newDragon.name}`,
            type: `${newDragon.type}`
         }) 
         history.goBack()
      }
   }

   function handleNewDragon(event) {
      const {id, value} = event.target
      setNewDragon({...newDragon, [id]: value})
   }


   return (
      <Container homeCreate>
         {isSpinner ? (
         <LoaderSpinner />
         ) : (
         <Wrapper create>
            <InputLabelContainer x={310}>
               <Input
                  onChange={handleNewDragon} 
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
               custom 
               text={isSpinner ? '' : 'CADASTRAR'} 
               x={308} 
            />
         </Wrapper>
         )}
         <ToastContainer theme='colored' position='bottom-center'/>
      </Container>
   )
}

export default CreateUpdate