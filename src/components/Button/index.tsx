import React from 'react'
import { ButtonProps } from '../../@types/types'
import { ButtonContainer, ButtonText } from './styles'


function Button(props: ButtonProps) {
   return (
      <ButtonContainer 
         onClick={props.onClick && props.onClick}
         className={
            props.custom ? 'custom' : '' || 
            props.navi_bar ? 'navi_bar' : '' ||
            props.edit ? 'edit' : '' || 
            props.modal_edit ? 'modal_edit' : '' ||
            props.del ? 'del' : '' || 
            props.mask ? 'mask' : '' ||
            props.footer ? 'footer' : '' ||
            props.mobile_modal_del ? 'mobile_modal_del' : '' ||
            props.close_delete_modal ? 'close_delete_modal' : '' ||
            props.lang_select ? 'lang_select' : '' ||
            props.select_lang ? 'selected_lang' : ''
         }
         selectedLang={props.selectedLang}
         toLeft={props.toLeft}
         x={props.x} 
      >
         <ButtonText>{props.text}</ButtonText> 
         {props.children}
      </ButtonContainer>
   )
}

export default Button