import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../pages";


function WithoutAuth() {

  return (
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  )
}

export default WithoutAuth