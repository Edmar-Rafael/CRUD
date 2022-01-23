import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

function Button({children, text, custom, edit, del, ...props}) {
   return (
      <ButtonContainer 
         className={
            custom ? 'custom' : '' || edit ? 'edit' : '' || del ? 'del' : ''} 
            {...props}
      >
         <ButtonText>{text}</ButtonText> 
         {children}
      </ButtonContainer>
   )
}

export default Button