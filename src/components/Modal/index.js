import React from "react";
import { ModalButtomContainer, ModalContainer, ModalMessage, Text } from "./styles";

function Modal({children, modal, setModal}) {

  return (
    <ModalContainer 
      isOpen={modal} 
      onRequestClose={() => setModal(false)}
      style={{overlay: {
        background: '#00000022',
      }}}
    >
      <ModalMessage>
        <Text>Esta ação ira apagar o Dragão permanentemente!</Text>  
        <Text>This will delete the Dragon permanently!</Text>
      </ModalMessage>
      <ModalButtomContainer>
        {children}
      </ModalButtomContainer>
    </ModalContainer>
  )
}

export default Modal