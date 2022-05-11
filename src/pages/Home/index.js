import React, { useState } from 'react'
import { EMAIL, JWT, PASSWORD } from '../../config'
import { 
  Wrapper, 
  Separator, 
  Button, 
  Input, 
  Container, 
  InputLabelContainer, 
  Icons, 
  LanguageToggle, 
} from '../../components'
import { LoginContainer } from './styles'
import FloatingLabel from '../../components/FloatingLabel'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { requestLogIn } from '../../store/ducks/login'
import handleLanguage from '../../resources/LangSource'


function Home() {
   const [maskType, setMaskType] = useState(false)
   const [user, setUser] = useState({
      token: JWT,
      id: 1,
      name: '',
      password: '',
   })
   useSelector(({changeLanguageState}) => changeLanguageState)
   
   const dispatch = useDispatch()

   function handleSubmit(event) {
      event.preventDefault()
      if(user.name === EMAIL && user.password === PASSWORD) {
         dispatch(requestLogIn(user))
      } else {
         toast.error(handleLanguage('loginError'))
      }
      
   }
   
   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }
      

   return (
      <Container homeCreate='true'>
         <ToastContainer theme='colored'/> 
         <LanguageToggle />  
         <Separator y={20}/>      
         <Wrapper>
            <LoginContainer onSubmit={handleSubmit}>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     x={42}
                     id='name'
                     type={'text'}
                     placeholder='test' 
                     value={user.name}
                  />
                  <FloatingLabel text={handleLanguage('name')}/>
                  <Separator y={25}/>
               </InputLabelContainer>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     id='password'
                     type={maskType ? '' : 'password'}
                     home
                     x={45}
                     placeholder='test' 
                     value={user.password}
                  />
                  <FloatingLabel text={handleLanguage('password')}/>
                  <Separator y={23}/>
                  <Button 
                     onClick={() => setMaskType(!maskType)} 
                     type='button' 
                     mask='true'
                  >
                     <Icons 
                        isFaEyeSlash={maskType} 
                        icon={maskType ? faEyeSlash : faEye}
                        fa_eye_slash='true'
                     />
                  </Button>
               </InputLabelContainer>
               <Separator />
               <Button text={handleLanguage('toConfirm')} x={278} custom='true'/>
            </LoginContainer>
         </Wrapper>
      </Container>
   )
}

export default Home