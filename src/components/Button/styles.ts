import styled from 'styled-components'
import Colors from '../../resources/Colors'

type ButtonContainerProps = {
   x?: number;
   y?: number;
   bordRad?: number;
   toLeft?: boolean;
   show?: boolean;
   selectedLang?: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
   display: flex;
   flex-direction: ${({toLeft}) => toLeft ? 'row-reverse' : ''};
   align-items: center;
   justify-content: center;
   height: ${({y}) => y || 35}px;
   background: ${Colors.background};
   border-radius: ${({bordRad}) => bordRad || 5}px;
   color: white;
   font-weight: 700;
   border: none;
   position: relative;
   box-shadow: ${Colors.boxShadow};
   transition: all 0.3s; 
   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }

   &.custom {
      width: 90%;
      color: black;
      background-color: white;

      &:hover{
         background-color: ${Colors.dragons};
      }

      @media(max-width: 800px){
         border-radius: 30px
      }
   }

   &.navi_bar {
      width: 12%;
      color: black;
      background-color: white;

      &:hover{
         background-color: ${Colors.dragons};
      }

      @media(max-width: 800px){
         width: 25%;
         border-radius: 30px
      }
   }

   &.mask {
      position: absolute;
      height: 21px;
      width: 23px;
      padding: 0;
      box-shadow: none;
      transform: translate(110px, 5px);
   }

   &.edit{
      width: 45px;
      height: 45px;
      border-radius: 25px;

      @media(max-width: 800px){
         width: 37px;
         height: 37px
      }
   }

   &.modal_edit{
      width: 45px;
      height: 45px;
      border-radius: 25px;

      @media(max-width: 500px){
         width: 120px;
         height: 37px
      }
   }

   &.del{
      width: 36px;
      height: 38px;
      border-radius: 5px;

      @media(max-width: 800px){
         width: 29px;
         height: 29px;
         border-radius: 5px;
      }
   }

   &.close_delete_modal {
      width: 17px;
      height: 17px;
      background-color: white;
   }

   &.mobile_modal_del{
      @media(max-width: 500px){
         width: 110px;
         height: 29px;
         border-radius: 7px;
      }
   }

   &.footer{
      color: #dddddd66;
      background-color: #111;
      cursor: text;
   }

   &.lang_select{
      width: ${({selectedLang}) => selectedLang ? 83 : 85}px;
      height: ${({selectedLang}) => selectedLang ? 23 : 25}px;
      color: ${({selectedLang}) => selectedLang ? `white` : `${Colors.label}`};
      font-size: ${({selectedLang}) => selectedLang ? 12 : 13}px;
      border: ${({selectedLang}) =>
         selectedLang ? `2px solid ${Colors.dragons}` : `2px solid ${Colors.label}`};
      transition: all .1s;

      &:hover{
         color: white;
         border: 2px solid ${Colors.dragons};
      }
   }

   &.selected_lang{
      justify-content: space-between;
      width: 85px;
      height: 25px;
      color: white;
      font-size: 13px;
      border: ${({show}) => 
         show ? `2px solid ${Colors.dragons}`: `2px solid ${Colors.label}`};
      box-shadow: none;

      &:hover{
         border: 2px solid ${Colors.dragons};
      }
   }
`

export const ButtonText = styled.span``