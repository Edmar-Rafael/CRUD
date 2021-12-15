import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const LoginContainer = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin: 13% auto;
   width: 300px;
   height: 350px;
   border: 1px solid white;
   border-radius: 5px;
   background-color: ${Colors.background};
`

export const LoginInput = styled.input`
   height: 50px;
   width: 250px;
   padding: 5px 10px;
   color: white;
   border: 1px solid white;
   border-radius: 4px;
   background-color: ${Colors.background};
   
   &:focus {
      outline: none;
   }
`