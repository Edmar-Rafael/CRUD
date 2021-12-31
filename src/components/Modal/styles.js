import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalContainer = styled(ReactModal)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 500px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  transform: translate(60%, 150%);
`

export const ModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  padding: 10px;
  color: #770000;
`

export const Text = styled.div``