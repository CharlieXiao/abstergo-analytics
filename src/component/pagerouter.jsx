import React from 'react'
import {
    Switch, Route
} from 'react-router-dom'

import {RouteConfig} from '../utils/config'
import NotFound from '../pages/404'
import Home from '../pages/home'

const PageRouter = ()=>{
    return (
        <Switch>
            <Route component={Home} path="/" exact/>
            {RouteConfig.map((route,index)=>{
                return (
                    <Route key={index} component={route.component} path={route.path} exact={route.exact} />
                );
            })}
            <Route component={NotFound}/>
        </Switch>
    );
}

export default PageRouter;