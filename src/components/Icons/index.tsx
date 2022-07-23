import React from "react";
import { IconsProps } from "../../@types/types";
import { IconContainer } from "./styles";


function Icons(props: IconsProps) {

  return (
    <IconContainer
      className={
        props.fa_eye_slash ? 'fa_eye_slash' : '' || 
        props.fa_times ? 'fa_times' : '' ||
        props.fa_trash ? 'fa_trash' : '' ||
        props.fa_pencil_check ? 'fa_pencil_check' : '' ||
        props.fa_search ? 'fa_search' : '' ||
        props.fa_chevron ? 'fa_chevron' : '' ||
        props.fa_arrow ? 'fa_arrow' : ''
      } 
      icon={props.faIcon} 
    />
  )
}

export default Icons