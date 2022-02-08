import React from "react";
import { UpdateModalContainer } from "./styles";

function UpdateModal({children, updateModal, handleCancelButton}) {

  return (
    <UpdateModalContainer
      closeTimeoutMS={2000}
      isOpen={updateModal}
      onRequestClose={() => handleCancelButton()}
      style={{
        overlay:{
          background: '#00000077',
          backdropFilter: 'blur(2px)'
        }
      }}
    >
      {children}
    </UpdateModalContainer>
  )
}

export default UpdateModal