import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   background-color: blue;

   &.update_modal{
     border: 1px solid blue;
     border-radius: 4px;
     font-family: 'Noto Sans';
     background-color: ${Colors.dragons};
     padding: 5px;
   }
`