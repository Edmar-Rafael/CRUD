import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Colors from "../../resources/Colors";

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${({color}) => color || Colors.label};
  transition: all .3s;

  &:hover{
    color: ${({isFaEye}) => isFaEye ? `${Colors.dragons}` : ''};
    filter: brightness(0.9);
  }

  &.list{
    font-size: 27px;
    color: white;
    &:hover {
      color: ${({hoverColor}) => hoverColor}
    }
  }
`