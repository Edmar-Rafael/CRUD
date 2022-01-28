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
   font-family: 'Noto Sans';
   background-color: ${Colors.dragons};

   @media(max-width: 800px) {
      height: 35px;
   }
`

export const Recipe = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-left: 10px;
   width: 25%;
   font-size: 20px;
   color: white;

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

export const DateContainer = styled.div``

export const NameContainer = styled.div``

export const TypeContainer = styled.div``

export const ModalMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  font-size: 22px;
  padding: 5px;
  color: #770000;
`

export const Text = styled.div`
  width: 100%;
`

export const ModalButtomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  padding: 2px 3px 5px 2px;
`

export const ModalcloseButtom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 4px;
`