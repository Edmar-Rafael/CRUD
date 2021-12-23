import React from "react";
import { ContainerBox } from "./styles";

function Container({children, homeCreate, list}) {

  return (
    <ContainerBox className={homeCreate ? 'homeCreate' : '' || list ? 'list' : ''}>
      {children}
    </ContainerBox>
  )
}

export default Container