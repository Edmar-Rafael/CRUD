import React from 'react'
import { ButtonContainer } from './styles'

function Button({text, custom, ...props}) {
   return (
      <ButtonContainer className={custom && 'custom'} {...props}>
         {text}
      </ButtonContainer>
   )
}

export default Button