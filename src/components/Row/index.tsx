import React, { ReactNode } from 'react'
import { RowContainer } from './styles'

type RowProps = {
   children: ReactNode;
   update_modal?: boolean;
}


function Row({children, update_modal}: RowProps) {

   return (
      <RowContainer className={update_modal ? 'update_modal' : ''}>
         {children}
      </RowContainer>
   )
}

export default Row