import React, { ReactNode } from "react";
import { InputLabelBox } from "./styles";

type InputLabelContainerProps = {
  children: ReactNode;
  search?: boolean
  x?: number
}


function InputLabelContainer({children, search, x}: InputLabelContainerProps) {

  return(
    <InputLabelBox className={search ? 'search' : ''} x={x}>
      {children}
    </InputLabelBox>
  )
}

export default InputLabelContainer