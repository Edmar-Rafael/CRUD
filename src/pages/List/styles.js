import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
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