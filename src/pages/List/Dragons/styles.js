import styled from "styled-components"
import Colors from "../../../resources/Colors"

export const DragonsContainer = styled.div`
   display: flex;
   flex-direction: row;
   padding: 5px 10px 5px 5px;
   width: 90%;
   border-radius: 2px;
   background-color: ${Colors.dragons};

   @media(max-width: 800px){
     padding: 3px 5px;
   }
`

export const DragonsRecipe = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-left: 10px;
   width: 25%;
   font-size: 20px;
   color: white;

   @media(max-width: 500px){
     width: 31%;
   }

   @media(max-width: 800px) {
      font-size: 14px;
      padding: 3px;
   }
`

export const ButtonBox = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 25%;
`

export const DateContainer = styled.div`
  font-family: 'Roboto';
`

export const NameContainer = styled.div`
  overflow: hidden;
  padding: 1px;
  font-family: 'Noto Sans';
`

export const TypeContainer = styled.div`
  overflow: hidden;
  padding: 1px;
  font-family: 'Noto Sans';
`