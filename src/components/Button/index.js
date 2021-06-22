import React from 'react'
import { ButtonContainer } from './styles'

function Button({prop}) {
   return (
      <ButtonContainer onClick={prop}>
         Avançar
      </ButtonContainer>
   )
}

export default Button