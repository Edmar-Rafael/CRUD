import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

function Button({children, text, custom, edit, modal_edit, del, mask, ...props}) {
   return (
      <ButtonContainer 
         className={
            custom ? 'custom' : '' || 
            edit ? 'edit' : '' || 
            modal_edit ? 'modal_edit' : '' ||
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