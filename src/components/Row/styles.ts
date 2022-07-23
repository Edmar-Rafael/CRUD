import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const RowContainer = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   background-color: ${Colors.dragons};

   @media(max-width: 500px){
     flex-wrap: wrap;
   }

   &.update_modal{
     border: 1px solid blue;
     border-radius: 4px;
     font-family: 'Noto Sans';
     padding: 5px;
   }
`