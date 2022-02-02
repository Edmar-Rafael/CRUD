import React from 'react'
import { Container } from './styles'

function Row({children, update_modal}) {

   return (
      <Container className={update_modal && 'update_modal'}>
         {children}
      </Container>
   )
}

export default Row