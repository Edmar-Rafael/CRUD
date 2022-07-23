import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  home?: boolean;
  list?: string;
  create?: boolean;
  search_dragon?: boolean;
} 


function Input({home, list, create, search_dragon, ...props}: InputProps) {

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