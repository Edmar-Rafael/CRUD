import React from 'react'
import { Container } from './styles'

function Row({children}) {

   return (
      <Container>
         {children}
      </Container>
   )
}

export default Row