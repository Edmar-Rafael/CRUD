import React from "react";
import { Route, Routes } from "react-router";
import { Container, NaviBar } from "../components";
import { Create, List } from "../pages";


function WithAuth() {

  return (
    <Container>
      <NaviBar />
      <Routes>
        <Route path='*' element={<List />} /> 
        <Route path='/create' element={<Create/>} />
      </Routes>
    </Container>
  )
}

export default WithAuth