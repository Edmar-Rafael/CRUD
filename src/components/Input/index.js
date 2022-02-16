import React from "react";
import { InputContainer } from "./styles";

function Input({home, list, create, search_dragon, ...props}) {

  return (
    <InputContainer 
      className={
        home ? 'home' : '' ||
        list ? 'list' : '' || 
        create ? 'create' : '' ||
        search_dragon ? 'search_dragon' : ''
      } 
      {...props}
    />
  )
}

export default Input