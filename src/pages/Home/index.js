import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { JWT } from '../../config'
import { Wrapper, Separator, Button, Input, Container, InputLabelContainer } from '../../components'
import { LoginContainer } from './styles'
import FloatingLabel from '../../components/FloatingLabel'


function Home() {
   const [user, setUser] = useState({
      token: JWT,
      id: 1,
      name: '',
      password: '',
   })
   const { logIn } = useAuth()

   function handleSubmit(event) {
      event.preventDefault()
      logIn(user)
   }
   
   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }
      

   return (
      <Container>
         <Separator y={150}/>
         <Wrapper>
            <LoginContainer onSubmit={handleSubmit}>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     id='name'
                     type='text'
                     home
                     placeholder='Nome de Usuário' 
                     value={user.name}
                  />
                  <FloatingLabel text={'Nome/Name'}/>
                  <Separator y={25}/>
               </InputLabelContainer>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     id='password'
                     type='password'
                     home
                     placeholder='Senha' 
                     value={user.password}
                  />
                  <FloatingLabel text={'Senha/password'}/>
                  <Separator y={23}/>
               </InputLabelContainer>
               <Separator />
               <Button text={'Avançar'} x={275} custom/>
            </LoginContainer>
         </Wrapper>
      </Container>
   )
}

export default Home