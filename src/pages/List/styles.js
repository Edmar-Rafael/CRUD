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

export const DragonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 5px;
   width: 90%;
   height: 40px;
   border-radius: 2px;
   background-color: ${Colors.dragons};
`

export const DateContainer = styled.div`
   padding: 0 5px;
   display: flex;
   align-items: center;
   width: 50%;
   font-size: 20px;
   color: white;
`  

export const DragonName = styled.div`
   display: flex;
   align-items: center;
   width: 50%; 
   font-size: 20px;
   color: white;
`

export const Type = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;
   font-size: 20px;
   color: white;
`
