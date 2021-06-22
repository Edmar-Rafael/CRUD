import { Route, Switch, Redirect } from 'react-router-dom'
import { CreateDelete, List, Login } from '../pages'

function Routes() {

   return (
      <Switch>
         <Redirect from='/' to='login' exact/>
         <Route path='/login' component={Login} exact/>
         <Route path='/list' component={List} exact/>
         <Route path='/create-delete' component={CreateDelete} exact/>
      </Switch>
   )
}

export default Routes