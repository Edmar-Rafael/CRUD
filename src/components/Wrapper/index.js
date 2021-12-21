import React from 'react'
import { WrapperContainer } from './styles'

function Wrapper({children, create,}) {
   return (
      <WrapperContainer className={create && 'create'}>
         {children}
      </WrapperContainer>
   )
}

export default Wrapper