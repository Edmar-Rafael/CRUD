import React from 'react'
import { ButtonContainer } from './styles'

function Button({children, text, custom, edit, del, ...props}) {
   return (
      <ButtonContainer 
         className={
            custom ? 'custom' : '' || edit ? 'edit' : '' || del ? 'del' : ''} 
            {...props}
      >
         {text} 
         {children}
      </ButtonContainer>
   )
}

export default Button