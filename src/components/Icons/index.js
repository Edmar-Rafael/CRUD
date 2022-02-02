import React from "react";
import { IconContainer } from "./styles";

function Icon({icon, fa_eye_slash, fa_times, fa_trash, fa_pencil_check, ...props}) {

  return (
    <IconContainer 
      className={
        fa_eye_slash ? 'fa_eye_slash' : '' || 
        fa_times ? 'fa_times' : '' ||
        fa_trash ? 'fa_trash' : '' ||
        fa_pencil_check ? 'fa_pencil_check' : ''
      } 
      icon={icon} {...props}
    />
  )
}

export default Icon