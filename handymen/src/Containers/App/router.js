import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../HomePage"

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
)

export default Router;
