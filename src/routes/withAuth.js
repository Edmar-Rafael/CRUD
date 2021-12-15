import React from "react";
import { Route, Switch } from "react-router";
import { CreateUpdate, List } from "../pages";


function WithAuth() {

  return (
    <Switch>
      <Route path='/' component={List} exact/>
      <Route path='/create' component={CreateUpdate} exact/>
    </Switch>
  )
}

export default WithAuth