import React, { InputHTMLAttributes } from "react";
import { Separator } from '..'
import { InputContainer, InputLabelBox, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  home?: boolean;
  update_modal?: boolean;
  create?: boolean;
  search_dragon?: boolean;
  search?: boolean;
  search_label?: boolean;
  x?: number;
  y?: number;
  label?: string;
  placeHolder?: string;
} 


function Input({...props}: InputProps) {

  return (
    <InputLabelBox x={props.x} >
      <InputContainer 
        className={
          props.home ? 'home' : '' ||
          props.update_modal ? 'update_modal' : '' || 
          props.create ? 'create' : '' ||
          props.search_dragon ? 'search_dragon' : '' ||
          props.search ? 'search' : ''
        } 
        placeholder={props.placeHolder}
        {...props}
      />
      <Label className={props.search_label ? 'search_label' : ''}>
        {props.label}
      </Label>
      <Separator y={props.y || 23}/>
    </InputLabelBox>
    
  )
}

export default Input