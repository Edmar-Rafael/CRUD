import React, { FormEvent, useState } from 'react'
import { EMAIL, JWT, PASSWORD } from '../../config'
import { 
  Wrapper, 
  Separator, 
  Button, 
  Input, 
  Container, 
  Icons, 
  LanguageToggle, 
} from '../../components'
import { Box, LoginContainer } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { requestLogIn } from '../../store/ducks/login'
import handleLanguage from '../../resources/LangSource'
import { useAppDispatch, useAppSelector } from '../../@types/types'


function Home() {
   const [maskType, setMaskType] = useState(false)
   const [user, setUser] = useState({
      token: JWT,
      id: 1,
      name: '',
      password: '',
   })
   useAppSelector(({changeLanguageState}) => changeLanguageState)
   
   const dispatch = useAppDispatch()

   function handleSubmit(event: FormEvent) {
      event.preventDefault()
      if(user.name === EMAIL && user.password === PASSWORD) {
         dispatch(requestLogIn(user))
      } else {
         toast.error(handleLanguage('loginError'))
      }
   }
   
   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }
      

   return (
      <Container homeCreate>
         <ToastContainer theme='colored'/> 
         <LanguageToggle />  
         <Separator y={20}/>      
         <Wrapper>
            <LoginContainer onSubmit={handleSubmit}>
                  <Input 
                     onChange={handleChange}
                     id='name'
                     type={'text'}
                     placeHolder='test' 
                     label={handleLanguage('name')}
                     value={user.name}
                  />
                  <Input 
                     onChange={handleChange}
                     id='password'
                     type={maskType ? '' : 'password'}
                     placeHolder='test' 
                     label={handleLanguage('password')}
                     value={user.password}
                     home
                  />
                  <Button 
                     onClick={() => setMaskType(!maskType)} 
                     type='submit'
                     mask
                  >
                     <Icons 
                        isFaEyeSlash={maskType} 
                        faIcon={maskType ? faEyeSlash : faEye}
                        fa_eye_slash
                     />
                  </Button>
               <Separator />
               <Button 
                  onClick={handleSubmit}
                  text={handleLanguage('toConfirm')} 
                  type='button'
                  custom
               />
            </LoginContainer>
         </Wrapper>
      </Container>
   )
}

export default Home