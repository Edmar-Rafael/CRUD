import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Colors from "../../resources/Colors";

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: 27px;
  color: white;
  transition: all .3s;

  &:hover{
    color: ${({isFaEye}) => isFaEye ? `${Colors.dragons}` : ''};
    filter: brightness(0.9);
  }

  &.fa_eye_slash{
    font-size: 22px;
    color: ${Colors.label};
    &:hover {
      color: ${({isFaEye}) => isFaEye ? `${Colors.dragons}` : ''}
    }
  }

  &.fa_trash{
    &:hover {
      color: ${Colors.fa_trash_hover};
    }
  }

  &.fa_pencil_check{
    &:hover {
      color: ${Colors.fa_pencil_check_hover};
    }
  }

  &.fa_times{
    &:hover {
      color: ${Colors.dragons};
    }
  }
`