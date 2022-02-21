import React from 'react'
import { ButtonContainer, ButtonText } from './styles'

function Button({children, text, ...props}) {
   return (
      <ButtonContainer 
         className={
            props.custom ? 'custom' : '' || 
            props.edit ? 'edit' : '' || 
            props.modal_edit ? 'modal_edit' : '' ||
            props.del ? 'del' : '' || 
            props.mask ? 'mask' : '' ||
            props.footer ? 'footer' : ''
         } 
            {...props}
      >
         <ButtonText>{text}</ButtonText> 
         {children}
      </ButtonContainer>
   )
}

export default Button