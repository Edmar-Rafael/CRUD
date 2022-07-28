import styled from "styled-components"
import Colors from "../../../resources/Colors"

export const DragonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px 5px 5px;
  width: 100%;
  border-radius: 2px;
  background-color: ${Colors.dragons};
  transition: all .3s;

  &:hover{
    filter: brightness(.9)
  }

  @media(max-width: 800px){
    padding: 3px 5px;
  }
`

export const DragonsRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  width: 25%;
  font-size: 1.22rem;
  color: white;

  @media(max-width: 500px){
    width: 31%;
  }

  @media(max-width: 800px) {
    font-size: .9rem;
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
  padding-left: 3px;
  font-family: 'Noto Sans'; 
`

export const TypeContainer = styled.div`
  padding-left: 3px;
  font-family: 'Noto Sans';

  @media(max-width: 500px){
    padding-left: 6px;
  }
`