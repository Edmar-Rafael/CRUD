import styled from "styled-components"
import Colors from "../../../resources/Colors"

export const DragonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 5px 10px 5px 5px;
   width: 90%;
   height: 55px;
   border-radius: 2px;
   background-color: ${Colors.dragons};
`

export const Recipe = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-left: 10px;
   width: 25%;
   font-size: 20px;
   color: white;
`

export const ButtonBox = styled.div`
   display: flex;
   justify-content: space-between;
   width: 9%;
`

export const DateContainer = styled.div``

export const NameContainer = styled.div``

export const TypeContainer = styled.div``