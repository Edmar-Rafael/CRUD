import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages";


function WithoutAuth() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default WithoutAuth