import React, { ReactNode } from "react";
import { ContainerBox } from "./styles";

type ContainerProps = {
  children: ReactNode;
  homeCreate?: boolean;
  list?: boolean;
}


function Container({children, homeCreate, list}: ContainerProps) {

  return (
    <ContainerBox className={homeCreate ? 'homeCreate' : '' || list ? 'list' : ''}>
      {children}
    </ContainerBox>
  )
}

export default Container