import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../HomePage"
import CategoryPage from "../CategoryPage"

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={CategoryPage} />
    </Switch>
)

export default Router;
