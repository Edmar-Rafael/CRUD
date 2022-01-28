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

   &.custom {
      width: ${({x}) => x || 100}px;
      color: black;
      background-color: white;

      &:hover{
         background: ${Colors.dragons};
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
   }

   &.del{
      width: 38px;
      height: 38px;
      border-radius: 5px;
   }

   &:hover {
      filter: brightness(0.9)
   }

   transition: all 0.2s; 
   cursor: pointer;
`

export const ButtonText = styled.span`

`