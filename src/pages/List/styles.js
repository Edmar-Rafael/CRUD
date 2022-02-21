import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const ListContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 90%;
   height: 70%;
   padding: 15px 10px 0 10px;
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
   justify-content: flex-end;
   width: 91.8%;
`

export const ListFooterButtonBox = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   width: 120px;
   padding: 5px;
   color: white;
   border: 1px solid ${Colors.dragons};
   border-style: none inset inset inset;
   background-color: ${Colors.dragons};
   transition: all .3s;
   transform: translate(0, 0px);

   &:hover{
      filter: brightness(0.9);
   }
`

export const FooterIcons = styled.div`
   display: flex;
   align-items: center;
   font-size: 24px;
   font-weight: 800;
   font-family: Roboto;
`