import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2px 15px;
   width: 97%;
   height: 50px;
   border-radius: 2px;
   background-color: ${Colors.header};
`

export const DragonsHeader = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 90%;
   padding: 5px;
   font-size: 25px;
   color: white;
`

export const RecipeContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding-left: 10px;
   width: 30%;
   font-size: 20px;
   color: white;
`

export const Recipe = styled.div`
   padding:0 6px 0 6px;
   border-bottom: 2px solid white;
`