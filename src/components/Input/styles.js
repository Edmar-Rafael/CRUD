import styled from "styled-components";
import Colors from "../../resources/Colors";

export const InputContainer = styled.input`
  height: 40px;
  width: 99%;
  padding: 5px 10px;
  font-size: 20px;
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
    font-size: 16px;
    font-weight: 900;
    width: ${({x}) => x || 113}px;
    padding: 0 5px 0 5px;
    color: ${Colors.dragons};
    transform: translate3d(-6px, -60px, 0) scale(.82) ;

    @media(max-width: 800px){
      width: fit-content;
      font-size: 12px;
      font-weight: 700;
    }
  }

  &.list{
    background-color: ${Colors.dragons};
    height: 20px;
    border-style: none none inset none;
    width: 90%;

    &:focus, :hover {
      border-color: white;
    }
  }

  &.search_dragon{
    padding-left: 27px;
    border-radius: 30px;
    
    &:focus + label, :not(:placeholder-shown) + label {
      transform: translate3d(10px, -60px, 0) scale(.82) ;
    }
  }

  @media(max-width: 800px){
    font-size: 14px;
  }
`