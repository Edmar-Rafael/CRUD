import styled from "styled-components";

export const InputLabelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 4px;
  width: ${({x}) => x || 290}px;
  max-width: 99%;
`