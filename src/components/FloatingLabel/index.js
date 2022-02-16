import React from 'react'
import { Label } from './styles'

function FloatingLabel({text, search}) {

  return (
    <Label className={search && 'search'}>
      {text}
    </Label>
  ) 
}

export default FloatingLabel