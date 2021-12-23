import React from "react";
import { Route, Switch } from "react-router";
import { Container, NaviBar } from "../components";
import { Create, List } from "../pages";


function WithAuth() {

  return (
    <Container>
      <NaviBar />
      <Switch>
        <Route path='/' component={List} exact/>
        <Route path='/create' component={Create} exact/>
      </Switch>
    </Container>
  )
}

export default WithAuth