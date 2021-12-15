import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const ButtonContainer = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${({x}) => x || 100}px;
   height: ${({y}) => y || 35}px;
   background-color: ${Colors.background};
   border-radius: ${({bordrad}) => bordrad || 5}px;
   color: white;
   font-weight: 700;
   border: ${({border}) => border || 'none'};

   &.custom {
      color: black;
      background-color: white;
   }

   &:hover {
      filter: brightness(0.9)
   }

   transition: filter 0.2s; 
   cursor: pointer;
`