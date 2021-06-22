import styled from 'styled-components'

export const ButtonContainer = styled.button`
   align-items: center;
   justify-content: center;
   width: ${({width}) => width || 100}px;
   height: ${({height}) => height || 35}px;
   background-color: ${({bkcolor}) => bkcolor || 'white'};
   cursor: pointer;
`