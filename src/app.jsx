import React from 'react'
import PageLayout from './component/layout'
import {
    Switch, Route, HashRouter as Router
} from 'react-router-dom'
import Home from './home/index'

const App = () => {
    return (
        <Router>
            <Switch>
                {/* 路由到首页 */}
                <Route component={Home} path='/' exact />
                {/* 其他路径都换转到内容页面 */}
                <Route component={PageLayout} />
            </Switch>
        </Router>
    )
}

export default App