import styled from 'styled-components'

export const DragonsHeader = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 90%;
   padding: 5px;
`

export const RecipeContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-left: 10px;
   width: 25%;
   font-size: 20px;
   color: white;

   @media(max-width: 800px) {
      font-size: 13px;
      padding: 2px;
   }


`

export const Recipe = styled.div`
   padding:0 6px;
   border-bottom: 2px solid white;

   @media(max-width: 800px) {
      flex-direction: column;
      padding: 0;
   }
`