import React, { useState } from 'react'
import { JWT } from '../../config'
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
import { ToastContainer } from 'react-toastify'
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
      dispatch(requestLogIn(user))
   }
   
   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }
      

   return (
      <Container homeCreate>
         <ToastContainer theme='colored'/>         
         <Wrapper>
            <Separator y={20}/>
            <LanguageToggle topY={205}/>
            <LoginContainer onSubmit={handleSubmit}>
               <Separator y={30}/>
               <InputLabelContainer x={280}>
                  <Input 
                     onChange={handleChange}
                     x={42}
                     id='name'
                     type={'text' || 'password'}
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
               <Button text={handleLanguage('toConfirm')} x={278} custom/>
            </LoginContainer>
         </Wrapper>
      </Container>
   )
}

export default Home