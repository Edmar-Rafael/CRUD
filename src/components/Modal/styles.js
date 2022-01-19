import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalContainer = styled(ReactModal)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 40%;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  transform: translate(60%, 150%);

  @media(max-width: 500px) {
    flex-direction: column;
    transform: translate(20%, 50%);
  }

  @media(max-width: 800px) {
    width: 60%;
    transform: translate(35%, 55%);
  }
`

export const ModalMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  font-size: 22px;
  padding: 5px;
  color: #770000;
`

export const Text = styled.div`
  width: 100%;
`

export const ModalButtomContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`