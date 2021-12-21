import React from "react";
import { InputContainer } from "./styles";

function Input({home, list, create, ...props}) {

  return (
    <InputContainer 
      className={
        home ? home : '' || list ? list : '' || create ? create : ''} 
      {...props}
    />
  )
}

export default Input