import React from "react";
import { DeleteButtonBox } from "./styles";

function DeleteButtonContainer({children}) {

  return (
    <DeleteButtonBox>
      {children}
    </DeleteButtonBox>
  )
}

export default DeleteButtonContainer