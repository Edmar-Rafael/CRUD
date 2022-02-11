import styled from 'styled-components'

const Separator = styled.div`
   width: ${({x}) => x || 10}px;
   height: ${({y}) => y || 10}px;

   @media(max-width: 800px){
      width: 5px;
   }
`

export default Separator