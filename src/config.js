import Dashboard from './pages/dashboard'
import Table from './pages/table'
import Bar from './pages/bar'
import Radar from './pages/radar'
import TagCloud from './pages/tagcloud'
import Pie from './pages/pie'
import Line from './pages/line'
import React from 'react'

import {
    DashboardOutlined,
    BarChartOutlined,
    BankOutlined,
    SendOutlined,
    RedditOutlined
} from '@ant-design/icons'

const RouteConfig = [
    {
        'path': '/dashboard',
        'exact': true,
        'icon': <DashboardOutlined />,
        'title': 'Dashboard',
        'component':Dashboard
    }, {
        'path': '/city',
        'exact': true,
        'icon': <BankOutlined />,
        'title': 'City',
        'component':Table,
        'subroute':[

        ]
    },{
        'path': '/fight',
        'exact': true,
        'icon': <SendOutlined />,
        'title': 'Flight',
        'component':Line,
        // 'subroute':[

        // ]
    }, {
        'path': '/conroa',
        'exact': true,
        'icon': <BarChartOutlined />,
        'title': 'Conora Virus',
        'component':Bar
    }, {
        'path': '/trivial',
        'exact': true,
        'icon': <RedditOutlined />,
        'title': 'Interesting Things',
        'component':Pie
    }
]

export {RouteConfig}