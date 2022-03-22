import styled from "styled-components";

export const LanguageToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const BorderToggle = styled.div`
  border:${({langSelect}) => langSelect ? '4px solid blue' : 0};
`