import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Brews from './Brews'


function Body() {
  return (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/brews' component={Brews} />
    </Switch>
  )
}
export default Body;
