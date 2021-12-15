import styled from 'styled-components'

const Separator = styled.div`
   width: ${({x}) => x || 10}px;
   height: ${({y}) => y || 10}px;
`

export default Separator