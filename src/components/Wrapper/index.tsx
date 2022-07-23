import React, { ReactNode } from 'react'
import { WrapperContainer } from './styles'

type WrapperProps = {
   children: ReactNode;
   create?: boolean
}


function Wrapper({children, create,}: WrapperProps) {
   return (
      <WrapperContainer className={create ? 'create' : ''}>
         {children}
      </WrapperContainer>
   )
}

export default Wrapper