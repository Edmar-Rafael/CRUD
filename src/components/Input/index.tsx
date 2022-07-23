import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  home?: boolean;
  update_modal?: boolean;
  create?: boolean;
  search_dragon?: boolean;
} 


function Input({home, update_modal, create, search_dragon, ...props}: InputProps) {

  return (
    <InputContainer 
      className={
        home ? 'home' : '' ||
        update_modal ? 'update_modal' : '' || 
        create ? 'create' : '' ||
        search_dragon ? 'search_dragon' : ''
      } 
      {...props}
    />
  )
}

export default Input