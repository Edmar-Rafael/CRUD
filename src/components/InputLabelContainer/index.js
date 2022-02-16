import React from "react";
import { InputLabelBox } from "./styles";

function InputLabelContainer({children, search, ...props}) {

  return(
    <InputLabelBox className={search && 'search'} {...props}>
      {children}
    </InputLabelBox>
  )
}

export default InputLabelContainer