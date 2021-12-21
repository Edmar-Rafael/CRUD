import React from "react";
import { InputContainer } from "./styles";

function Input({list, ...props}) {

  return (
    <InputContainer className={list && 'list'} {...props}/>
  )
}

export default Input