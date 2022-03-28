import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import { checkLog } from '../store/ducks/login'
import WithAuth from './withAuth'
import WithoutAuth from './withoutAuth'


function Routes() {
   const isAuthenticated = useSelector(({loginState}) => loginState.data)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(checkLog())
   }, [dispatch])

   return (
      <Switch>
         {isAuthenticated ? <WithAuth/> : <WithoutAuth/>}
      </Switch>
   )
}

export default Routes