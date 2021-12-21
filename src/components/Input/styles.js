import styled from "styled-components";
import Colors from "../../resources/Colors";

export const InputContainer = styled.input`
  height: 50px;
  width: 250px;
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  background-color: ${Colors.background};
  
  &.list{
    background-color: ${Colors.dragons};
    height: 25px;
    border-style: none none inset none;
    width: 70%;
  }

  &:focus {
    outline: none;
  }
`