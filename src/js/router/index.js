import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../router/Home/Home';

const MainRouter = ()=>(
    <Switch>
        <Route path='/' component={Home} />
    </Switch>
)



export default MainRouter;