import React from "react";
import { ModalContainer } from "./styles";

function DeleteButtonModal({children, deleteModal, setDeleteModal}) {

  return (
    
    <ModalContainer 
      closeTimeoutMS={2000}
      isOpen={deleteModal} 
      onRequestClose={() => setDeleteModal(false)}
      style={{overlay: {
        background: '#00000077',
        backdropFilter: 'blur(2px)'
      }}}
    >
      {children}
    </ModalContainer>
    
  )
}

export default DeleteButtonModal