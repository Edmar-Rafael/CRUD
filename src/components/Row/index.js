import React from 'react'
import { RowContainer } from './styles'

function Row({children, update_modal}) {

   return (
      <RowContainer className={update_modal && 'update_modal'}>
         {children}
      </RowContainer>
   )
}

export default Row