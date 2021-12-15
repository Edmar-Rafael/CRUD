import React from 'react'
import { Switch } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import WithAuth from './withAuth'
import WithoutAuth from './withoutAuth'


function Routes() {
   const { isAuthenticated } = useAuth()

   return (
      <Switch>
         {isAuthenticated ? <WithAuth/> : <WithoutAuth/>}
      </Switch>
   )
}

export default Routes