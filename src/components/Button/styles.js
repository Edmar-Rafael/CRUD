import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const ButtonContainer = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${({x}) => x || 100}px;
   height: ${({y}) => y || 35}px;
   background: ${Colors.background};
   border-radius: ${({bordrad}) => bordrad || 5}px;
   color: white;
   font-weight: 700;
   border: none;
   position: relative;
   box-shadow: 6px 8px 10px #090909;

   &.custom {
      color: black;
      background-color: white;
   }

   &.edit{
      width: 45px;
      height: 45px;
      border-radius: 25px;
   }

   &:hover {
      filter: brightness(0.9)
   }

   transition: filter 0.2s; 
   cursor: pointer;
`