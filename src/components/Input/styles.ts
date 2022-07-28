import styled from "styled-components";
import Colors from "../../resources/Colors";

export const InputLabelBox = styled.div<{x?: number}>`
  display: flex;
  flex-wrap: wrap;
  width: ${({x}) => x || 90}%;
  max-width: 99%;
`

export const InputContainer = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px 10px;
  font-size: 1.2rem;
  color: white;
  border: 2px solid ${Colors.label};
  border-radius: 4px;
  background-color: ${Colors.background};
  transition: all .3s;

  &:focus, :hover {
      border-color: ${Colors.dragons};
      outline: none;
    }
  
  &:focus + label, :not(:placeholder-shown) + label {
    font-size: 1rem;
    font-weight: 900;
    width: fit-content;
    height: fit-content;
    padding: 0 5px 0 5px;
    color: ${Colors.dragons};
    transform: translate3d(-6px, -60px, 0) scale(.82) ;

    @media(max-width: 800px){
      font-size: 12px;
      font-weight: 700;
    }
  }

  &.update_modal{
    background-color: ${Colors.dragons};
    height: 20px;
    border-style: none none inset none;
    width: 90%;

    &:focus, :hover {
      border-color: white;
    }
  }

  &.search_dragon{
    padding-left: 38px;
    border-radius: 30px;
    
    &:focus + label, :not(:placeholder-shown) + label {
      transform: translate3d(10px, -60px, 0) scale(.82) ;
    }
  }

  @media(max-width: 800px){
    font-size: 14px;
  }
`

export const Label = styled.label`
   font-size: 18px;
   color: ${Colors.label};
   font-weight: 100;
   width: 70%;
   max-width: 99%;
   padding: 0 4px 2px 4px;
   margin-left: 11px;
   text-align: start;
   transform-origin: 0 0;
   transform: translate(0px, -38px);
   transition: all .3s;
   background-color: ${Colors.background};
   z-index: 9;
   pointer-events: none;

   &.search_label{
      transform: translate(25px, -38px);

      @media(max-width: 800px){
         font-size: 14px;
         transform: translate(17px, -35px);
      }
   }

   @media(max-width: 800px){
      font-size: 14px;
      transform: translate(0px, -35px);
   }
`