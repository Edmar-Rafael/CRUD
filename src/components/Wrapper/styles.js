import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const WrapperContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 315px;
   height: 350px;
   border: 2px solid ${Colors.label};
   border-radius: 5px;
   transition: all .3s;
   background-color: ${Colors.background};


   &:hover{
      border-color: ${Colors.dragons};
   }

   &.create{
      width: 350px;
   }
`
