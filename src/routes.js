import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Login from './pages/Login';

import * as ROUTES from './constants/routes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path={ROUTES.LOGIN} component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;