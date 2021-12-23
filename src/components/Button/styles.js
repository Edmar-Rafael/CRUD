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
      min-width: 100px;
      color: black;
      background-color: white;
      
      &:hover{
         background: ${Colors.dragons};
      }
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