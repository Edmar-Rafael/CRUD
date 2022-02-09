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

   &.modalButtonBox_mobile{
     @media(max-width: 500px){
       justify-content: space-between;
       width: 100%;
       padding: 25px 15px 5px 15px;
     }
   }
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


export const UpdateModalHeader = styled.div`
  width: 100%;
  color: white;
  padding: 5px;
`

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

export const ModalDragonsHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 5px;
`

export const ModalRecipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  width: 25%;
  font-size: 20px;
  color: white;

  @media(max-width: 500px){
    flex-wrap: wrap;
    width: 35%;
  }

  @media(max-width: 800px) {
    flex-wrap: wrap;
    font-size: 13px;
    padding: 2px;
  }
`

export const ModalRecipe = styled.div`
  padding:0 6px;
  border-bottom: 2px solid white;

  @media(max-width: 800px) {
    padding: 0;
  }
`