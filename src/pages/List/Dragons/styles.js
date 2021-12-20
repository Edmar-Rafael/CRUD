import styled from "styled-components"
import Colors from "../../../resources/Colors"

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const DragonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 5px;
   width: 90%;
   height: 40px;
   border-radius: 2px;
   background-color: ${Colors.dragons};
`

export const DateContainer = styled.div``

export const NameContainer = styled.div``

export const TypeContainer = styled.div``

export const Recipe = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 25%;
   font-size: 20px;
   color: white;
`

export const ButtonBox = styled.div`
   display: flex;
   justify-content: space-between;
   width: 9%;
`