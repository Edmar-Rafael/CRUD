import styled from "styled-components";

export const LanguageToggleContainer = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const BorderToggle = styled.div`
  border-radius: 6px;
  background-color: ${({lang}) => lang ? 'blue' : ''};
  border: ${({lang}) => lang ? `3px solid blue` : '3px solid transparent'};
  transition: all .3s;
`