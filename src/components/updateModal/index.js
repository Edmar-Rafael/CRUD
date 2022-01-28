import React from "react";
import { UpdateModalContainer } from "./styles";

function UpdateModal({children, isUpdate, handleCancelButton}) {

  return (
    <UpdateModalContainer
      closeTimeoutMS={2000}
      isOpen={isUpdate}
      onRequestClose={() => handleCancelButton()}
      style={{
        overlay:{
          background: '#000000bb',
        }
      }}
    >
      {children}
    </UpdateModalContainer>
  )
}

export default UpdateModal