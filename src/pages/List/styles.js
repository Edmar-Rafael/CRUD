import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const ListContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   height: 70%;
   padding: 5px 10px;
   border: 1px solid ${Colors.label};
   transition: all .3s;

   &:hover, :focus{
      border: 1px solid ${Colors.dragons}
   }

   @media(max-width: 800px){
      height: 400px
   }
`

export const DragonsHeader = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 90%;
   padding: 5px;
`

export const RecipeContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 25%;
   font-size: 20px;
   color: white;

   @media(max-width: 800px) {
      font-size: 13px;
      padding: 2px;
   }
`

export const Recipe = styled.div`
   align-self: end;
   padding:0 6px;
   border-bottom: 2px solid white;

   @media(max-width: 800px) {
      padding: 0;
   }
`

export const ListFooter = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   width: 90%;
   padding: 12px;
   background-color: ${Colors.header};
`