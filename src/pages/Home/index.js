import React, { useState } from 'react'
import { JWT } from '../../config'
import { Wrapper, Separator, Button, Input, Container, InputLabelContainer, Icons } from '../../components'
import { LoginContainer } from './styles'
import FloatingLabel from '../../components/FloatingLabel'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { requestLogIn } from '../../store/ducks/login'


function Home() {
   const [maskType, setMaskType] = useState(false)
   const [user, setUser] = useState({
      token: JWT,
      id: 1,
      name: '',
      password: '',
   })
   const dispatch = useDispatch()

   function handleSubmit(event) {
      event.preventDefault()
      dispatch(requestLogIn(user))
   }
   
   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }
      

   return (
      <Container homeCreate>
         <ToastContainer theme='colored' />
         <Wrapper>
            <LoginContainer onSubmit={handleSubmit}>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     x={90}
                     id='name'
                     type={'text' || 'password'}
                     placeholder='test' 
                     value={user.name}
                  />
                  <FloatingLabel text={'Nome/Name'}/>
                  <Separator y={25}/>
               </InputLabelContainer>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     id='password'
                     type={maskType ? '' : 'password'}
                     home
                     x={115}
                     placeholder='test' 
                     value={user.password}
                  />
                  <FloatingLabel text={'Senha/Password'}/>
                  <Separator y={23}/>
                  <Button 
                     onClick={() => setMaskType(!maskType)} 
                     type='button' 
                     mask
                  >
                     <Icons 
                        isFaEyeSlash={maskType} 
                        icon={maskType ? faEyeSlash : faEye}
                        fa_eye_slash
                     />
                  </Button>
               </InputLabelContainer>
               <Separator />
               <Button text={'Avançar'} x={278} custom/>
            </LoginContainer>
         </Wrapper>
      </Container>
   )
}

export default Home