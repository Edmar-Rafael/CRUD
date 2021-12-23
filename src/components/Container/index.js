import React from "react";
import { ContainerBox } from "./styles";

function Container({children, home}) {

  return (
    <ContainerBox className={home && 'home'}>
      {children}
    </ContainerBox>
  )
}

export default Container