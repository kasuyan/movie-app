import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/pages/Top'
import Detail from '../components/pages/Detail'

const Routes = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
  </>
)

export default Routes;