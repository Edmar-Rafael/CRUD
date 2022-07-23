import styled from 'styled-components'

type SeparatorProps = {
   x?: number;
   y?: number;
}


const Separator = styled.div<SeparatorProps>`
   width: ${({x}) => x || 10}px;
   height: ${({y}) => y || 10}px;

   @media(max-width: 800px){
      width: 5px;
   }
`

export default Separator