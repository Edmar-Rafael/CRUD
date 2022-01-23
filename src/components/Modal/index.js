import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "..";
import { 
  ModalButtomContainer, 
  ModalcloseButtom, 
  ModalContainer, 
  ModalMessage, 
  Text 
} from "./styles";

function Modal({children, modal, setModal}) {

  return (
    <ModalContainer 
      closeTimeoutMS={2000}
      isOpen={modal} 
      onRequestClose={() => setModal(false)}
      style={{overlay: {
        background: '#000000cc',
      }}}
    >
      {children}
    </ModalContainer>
  )
}

export default Modal