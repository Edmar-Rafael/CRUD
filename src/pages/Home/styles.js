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