import React from "react";
import { ModalContainer } from "./styles";

function DeleteButtonModal({children, modal, setModal}) {

  return (
    
    <ModalContainer 
      closeTimeoutMS={2000}
      isOpen={modal} 
      onRequestClose={() => setModal(false)}
      style={{overlay: {
        background: '#000000bb',
      }}}
    >
      {children}
    </ModalContainer>
    
  )
}

export default DeleteButtonModal