import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Colors from "../../resources/Colors";

type IconContainerProps = {
  isModalOpen?: boolean;
  isFaEyeSlash?: boolean;
  drop?: boolean;
  show?: boolean;
  toLeft?: boolean
}


export const IconContainer = styled(FontAwesomeIcon)<IconContainerProps>`
  font-size: ${({isModalOpen}) => isModalOpen ? 15 : 27}px;
  color: ${({isModalOpen}) =>  isModalOpen ? 'black' : 'white'};
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
      color: ${({isModalOpen}) => isModalOpen ? 'black' : `${Colors.dragons}`};
    }
  }

  &.fa_search{
    position: absolute;
    font-size: 18px;
    transform: translate(10px, 20px);
  }

  &.fa_chevron{
    color: ${({drop}) => drop ? 'white' : '#dddddd66'};
    background-color: #111111;
    font-size: ${({drop}) => drop ? 15 : ''}px;
    transform: ${({show}) => `rotate(${show ? '-180deg' : ''})`};
  }

  @media(max-width: 800px){
    font-size: 19px; 
  }

  &.fa_arrow{
    padding-left: ${({toLeft}) => toLeft ? 4 : 0}px;
    color: black;
    font-size: 14px;
  }
`