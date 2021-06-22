import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, Separator, Button } from '../../components'
import { LoginContainer, LoginInput } from './styles'


function Container() {
   const [username, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const history = useHistory()
   console.log(history)

   function logged() {
      if(username === 'eu' && password === 'entra') {
         history.push('/list')      
      } else {
         window.alert('errroooooou')
         setUserName('')
         setPassword('')
      } 
   } 

   return (
      <>
      <LoginContainer>
         <Wrapper>
            <LoginInput 
               type='text' 
               id='txt' 
               placeholder='Nome de Usuário' 
               onChange={(e) => setUserName(e.target.value)}
               value={username}
            />
            <Separator height={45}/>
            <LoginInput 
               type='password' 
               id='pas' 
               placeholder='Senha' 
               onChange={(ev) => setPassword(ev.target.value)}
               value={password}
            />
            <Separator height={25}/>
         </Wrapper>
         <Button onClick={logged}>
            Avançar
         </Button>       
      </LoginContainer>
      </>
   )
}

export default Container