import React from "react";
import { DeleteButtonBox } from "./styles";

function DeleteButtonContainer({children, mobile_delete_modal}) {

  return (
    <DeleteButtonBox className={mobile_delete_modal ? 'mobile_delete_modal' : ''}>
      {children}
    </DeleteButtonBox>
  )
}

export default DeleteButtonContainer