import ReactModal from "react-modal"
import styled from "styled-components"
import Colors from "../../resources/Colors"

export const UpdateModalContainer = styled(ReactModal)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  transform: translate(8%, 100%);
  margin-top: 5%;

  @media(max-width: 800px) {
    margin-top: 0;
    transform: translate(8%, 50%);
  }
`

export const UpdateModalHeader = styled.div`
  width: 100%;
  color: white;
  padding: 5px;
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

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;

  @media(max-width: 500px){
    justify-content: space-between;
    width: 100%;
    padding: 25px 15px 20px 15px;
    background-color: ${Colors.blue};
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

export const DateContainer = styled.div`
  font-family: 'Roboto';
`