import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const ButtonContainer = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   height: ${({y}) => y || 35}px;
   background: ${Colors.background};
   border-radius: ${({bordrad}) => bordrad || 5}px;
   color: white;
   font-weight: 700;
   border: none;
   position: relative;
   box-shadow: 6px 8px 10px #090909;
   transition: all 0.3s; 
   cursor: pointer;

   &:hover {
      filter: brightness(0.9)
   }

   &.custom {
      width: ${({x}) => x || 100}px;
      color: black;
      background-color: white;

      &:hover{
         background: ${Colors.dragons};
      }

      @media(max-width: 800px){
         border-radius: 30px
      }
   }

   &.mask {
      position: fixed;
      height: 21px;
      width: 23px;
      padding: 0;
      box-shadow: none;
      transform: translate3d(245px, 17px, 0);
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
      width: 38px;
      height: 38px;
      border-radius: 5px;

      @media(max-width: 800px){
         width: 29px;
         height: 29px
      }
   }

   &.footer{
      color: #dddddd66;
      background-color: #111;
   }
`

export const ButtonText = styled.span`

`