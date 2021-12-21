import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 100vh;
   font-size: 20px;
`

export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2px 15px;
   width: 97%;
   height: 50px;
   border-radius: 2px;
   background-color: ${Colors.header};
`

export const Input = styled.input`
   width: 300px;
   height: 50px;
`