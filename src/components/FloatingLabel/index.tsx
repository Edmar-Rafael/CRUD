import React from 'react'
import { Label } from './styles'

type FloatingLabelProps = {
  text: string;
  search?: boolean;
}


function FloatingLabel({text, search}: FloatingLabelProps) {

  return (
    <Label className={search ? 'search' : ''}>
      {text}
    </Label>
  ) 
}

export default FloatingLabel