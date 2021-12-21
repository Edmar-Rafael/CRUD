import styled from "styled-components";
import Colors from "../../resources/Colors";

export const InputContainer = styled.input`
  height: 40px;
  width: 250px;
  max-width: 90%;
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  background-color: ${Colors.background};
  transition: all .3s;
  
  &:focus + label, :not(:placeholder-shown) + label {
    font-size: 16px;
    font-weight: 700;
    color: ${Colors.createInput};
    width: 113px;
    transform: translate3d(-6px, -60px, 0) scale(.82) ;
  }

  &.home{
    &:focus + label, :not(:placeholder-shown) + label {
      font-size: 16px;
      font-weight: 700;
      color: ${Colors.createInput};
      width: 85px;
      transform: translate3d(-6px, -60px, 0) scale(.82) ;
    }
    
    &:focus, :hover {
      border-color: ${Colors.homeInput};
      outline: none;
    }
  }

  &.list{
    background-color: ${Colors.dragons};
    height: 25px;
    border-style: none none inset none;
    width: 70%;

    &:focus, :hover {
      border-color: ${Colors.homeInput};
      outline: none;
    }
  }

  &.create{
    width: 99%;
    height: 40px;

    &:focus + label, :not(:placeholder-shown) + label {
    font-size: 16px;
    font-weight: 700;
    color: ${Colors.createInput};
    width: 48px;
    transform: translate3d(-6px, -60px, 0) scale(.82) ;
  }

    &:focus, :hover {
    border-color: ${Colors.createInput};
    outline: none;
    }
  }
`