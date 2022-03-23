import styled from "styled-components";

export const LanguageToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const BorderToggle = styled.div`
  border-radius: 6px;
  background-color: ${({lang}) => lang ? 'blue' : ''};
  border: ${({lang}) => lang ? `3px solid blue` : ''};
`