import ReactModal from "react-modal"
import styled from "styled-components"
import Colors from "../../resources/Colors"

export const UpdateModalContainer = styled(ReactModal)`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: ${Colors.dragons};
  border: 1px solid blue;
  border-radius: 4px;
  font-family: 'Noto Sans';
  transform: translate(30%, 150%);
  margin-top: 15%;
  padding: 5px;
`