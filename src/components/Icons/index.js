import React from "react";
import { IconContainer } from "./styles";

function Icon({icon, ...props}) {

  return (
    <IconContainer
      className={
        props.fa_eye_slash ? 'fa_eye_slash' : '' || 
        props.fa_times ? 'fa_times' : '' ||
        props.fa_trash ? 'fa_trash' : '' ||
        props.fa_pencil_check ? 'fa_pencil_check' : '' ||
        props.fa_search ? 'fa_search' : '' ||
        props.fa_chevron ? 'fa_chevron' : ''
      } 
      icon={icon} 
      {...props}
    />
  )
}

export default Icon