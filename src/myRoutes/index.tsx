import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../@types/types'
import { checkLog } from '../store/ducks/login'
import WithAuth from './withAuth'
import WithoutAuth from './withoutAuth'


function MyRoutes() {
   const isAuthenticated = useAppSelector(({loginState}) => loginState.data)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(checkLog())
   }, [dispatch])

   return (
      <Routes>
         <Route path='' element={isAuthenticated ? <WithAuth/> : <WithoutAuth/>} />
      </Routes>
   )
}

export default MyRoutes