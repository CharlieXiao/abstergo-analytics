import React from 'react'
import PageRouter from './component/pagerouter'
import PageLayout from './component/layout'
import { HashRouter as Router } from 'react-router-dom'
import Home from './pages/home'

const App = ()=>{
    return (
        <Router>
            <PageLayout>
                <PageRouter/>
            </PageLayout>
        </Router>
    )
}

export default App