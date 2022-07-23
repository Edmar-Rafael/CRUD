import React, { ReactNode } from "react";
import { DeleteButtonBox } from "./styles";

type DeleteButtonContainerProps = {
  children: ReactNode;
  mobile_delete_modal?: boolean;
}


function DeleteButtonContainer({children, mobile_delete_modal}: DeleteButtonContainerProps) {

  return (
    <DeleteButtonBox className={mobile_delete_modal ? 'mobile_delete_modal' : ''}>
      {children}
    </DeleteButtonBox>
  )
}

export default DeleteButtonContainer