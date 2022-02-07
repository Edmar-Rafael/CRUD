import ReactModal from "react-modal"
import styled from "styled-components"

export const UpdateModalContainer = styled(ReactModal)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  transform: translate(8%, 100%);
  margin-top: 5%;

  @media(max-width: 500px) {
    width: 92%;
    transform: translate(7%, 100%);
  }
`