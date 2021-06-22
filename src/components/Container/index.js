import React, { useState } from 'react'
import { Wrapper, Separator, Button } from '../../components'
import { LoginContainer, LoginInput } from './styles'


function Container() {
   const [username, setUserName] = useState('')
   const [password, setPassword] = useState('')

   function logged() {
      if(username === 'eu' && password === 'entra') {
         window.alert(username + ' => ' + password)
         document.getElementById('txt').value=''
         document.getElementById('pas').value=''         
      } else {
         window.alert('errroooooou')
         document.getElementById('txt').value=''
         document.getElementById('pas').value=''
      } 
   } 
   
   return (
      <LoginContainer>
         <Wrapper>
            <LoginInput 
               type='text' 
               id='txt' 
               placeholder='Nome de Usuário' 
               onChange={(e) => setUserName(e.target.value)}
            />
            <Separator height={45}/>
            <LoginInput 
               type='password' 
               id='pas' 
               placeholder='Senha' 
               onChange={(ev) => setPassword(ev.target.value)}
            />
            <Separator height={25}/>
         </Wrapper>
         <Button prop={logged}/>       
      </LoginContainer>
   )
}

export default Container