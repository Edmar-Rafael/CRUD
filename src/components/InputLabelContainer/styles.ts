import styled from "styled-components";

type InputLabelBoxType = {
  x?: number
}


export const InputLabelBox = styled.div<InputLabelBoxType>`
  display: flex;
  flex-wrap: wrap;
  width: ${({x}) => x || 290}px;
  max-width: 99%;

  &.search{
    width: 90%;
  }
`