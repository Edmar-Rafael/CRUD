import React, { useState } from 'react'
import { createDragon } from '../../services/dragon'
import { useHistory } from 'react-router-dom'
import { 
   Button, 
   Separator, 
   Input, 
   InputLabelContainer, 
   Wrapper, 
   FloatingLabel, 
   Container
} from '../../components'


function CreateUpdate() {
   const [newDragon, setNewDragon] = useState({
      name: '',
      type: ''
   })
   const history = useHistory()

   async function createNewDragon() {
      await createDragon({
         name: `${newDragon.name}`,
         type: `${newDragon.type}`
      }) 
      history.goBack()
   }

   function handleNewDragon(event) {
      const {id, value} = event.target
      setNewDragon({...newDragon, [id]: value})
   }


   return (
      <Container homeCreate>
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
               text={'CADASTRAR'} 
               x={308} 
            />
         </Wrapper>
      </Container>
   )
}

export default CreateUpdate