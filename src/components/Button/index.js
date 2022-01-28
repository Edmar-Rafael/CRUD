import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

function Button({children, text, custom, edit, del, mask, ...props}) {
   return (
      <ButtonContainer 
         className={
            custom ? 'custom' : '' || 
            edit ? 'edit' : '' || 
            del ? 'del' : '' || 
            mask ? 'mask' : ''
         } 
            {...props}
      >
         <ButtonText>{text}</ButtonText> 
         {children}
      </ButtonContainer>
   )
}

export default Button