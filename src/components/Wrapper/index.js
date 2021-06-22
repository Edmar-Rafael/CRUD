import React from 'react'
import { WrapperContainer } from './styles'

function Wrapper({children}) {
   return (
      <WrapperContainer>
         {children}
      </WrapperContainer>
   )
}

export default Wrapper