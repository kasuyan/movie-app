import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Top';
import Detail from '../components/pages/Detail';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/detail/:movieId" component={Detail} />
	</Switch>
);

export default Routes;
