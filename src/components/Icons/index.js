import React from "react";
import { IconContainer } from "./styles";

function Icon({icon, list, ...props}) {

  return (
    <IconContainer className={list && 'list'} icon={icon} {...props}/>
  )
}

export default Icon