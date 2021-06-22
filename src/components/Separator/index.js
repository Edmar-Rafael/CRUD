import styled from 'styled-components'

const Separator = styled.div`
   width: ${({width}) => width || 10}px;
   height: ${({height}) => height || 10}px;
   background-color: ${({color}) => color};
`

export default Separator