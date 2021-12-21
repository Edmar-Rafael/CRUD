import React from "react";
import { Route, Switch } from "react-router";
import { Create, List } from "../pages";


function WithAuth() {

  return (
    <Switch>
      <Route path='/' component={List} exact/>
      <Route path='/create' component={Create} exact/>
    </Switch>
  )
}

export default WithAuth