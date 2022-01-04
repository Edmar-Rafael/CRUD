import React from "react";
import { InputLabelBox } from "./styles";

function InputLabelContainer({children, ...props}) {

  return(
    <InputLabelBox {...props}>
      {children}
    </InputLabelBox>
  )
}

export default InputLabelContainer