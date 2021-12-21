import React from 'react'
import { ButtonContainer } from './styles'

function Button({children, text, custom, ...props}) {
   return (
      <ButtonContainer className={custom && 'custom'} {...props}>
         {text} {children}
      </ButtonContainer>
   )
}

export default Button