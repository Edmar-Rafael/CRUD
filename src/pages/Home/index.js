import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { JWT } from '../../config'
import { Wrapper, Separator, Button } from '../../components'
import { LoginContainer, LoginInput } from './styles'


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
      <LoginContainer onSubmit={handleSubmit}>
         <Wrapper>
            <LoginInput 
               onChange={handleChange}
               id='name'
               type='text'
               placeholder='Nome de Usuário' 
               value={user.name}
            />
            <Separator height={45}/>
            <LoginInput 
               onChange={handleChange}
               id='password'
               type='password'
               placeholder='Senha' 
               value={user.password}
            />
            <Separator height={25}/>
         </Wrapper>
         <Button text={'Avançar'} custom/>
      </LoginContainer>
   )
}

export default Home