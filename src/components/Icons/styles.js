import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Colors from "../../resources/Colors";

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: ${({isModalOpened}) => isModalOpened ? 15 : 27}px;
  color: ${({isModalOpened}) =>  isModalOpened ? 'black' : 'white'};
  transition: all .3s;

  &:hover{
    filter: brightness(0.9);
  }

  &.fa_eye_slash{
    font-size: 22px;
    color: ${Colors.label};
    &:hover {
      color: ${({isFaEyeSlash}) => isFaEyeSlash ? '' : `${Colors.dragons}`}
    }
  }

  &.fa_pencil_check{
    &:hover {
      color: ${Colors.fa_pencil_check_hover};
    }
  }

  &.fa_trash{
    &:hover {
      color: ${Colors.fa_trash_hover};
    }
  }

  &.fa_times{
    &:hover {
      color: ${({isModalOpened}) => isModalOpened ? 'black' : `${Colors.dragons}`};
    }
  }

  &.fa_search{
    position: absolute;
    font-size: 18px;
    transform: translate(10px, 20px);
  }

  &.fa_chevron{
    color: #dddddd66;
    background-color: #111111;
  }

  @media(max-width: 800px){
      font-size: 19px;
    }
`