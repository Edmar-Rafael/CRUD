import React from "react";
import { ModalContainer } from "./styles";

function Modal({children, modal, setModal}) {

  return (
    
    <ModalContainer 
      closeTimeoutMS={2000}
      isOpen={modal} 
      onRequestClose={() => setModal(false)}
      style={{overlay: {
        background: '#000000cc',
        backdropFilter: 'blur(1px)',
      }}}
    >
      {children}
    </ModalContainer>
    
  )
}

export default Modal