import styled from 'styled-components'

export const LoginContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin: 13% auto;
   width: 300px;
   height: 350px;
   border: 1px solid white;
   background-color: transparent;
`

export const LoginInput = styled.input`
   height: 50px;
   width: 250px;
   background-color: white;
   
   &:focus {
      outline: none;
   }
`