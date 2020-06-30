import Dashboard from '../pages/dashboard'
import Table from '../pages/table'
import Bar from '../pages/bar'
import Radar from '../pages/radar'
import TagCloud from '../pages/tagcloud'
import Pie from '../pages/pie'
import Line from '../pages/line'
import React from 'react'

import {
    DashboardOutlined,
    BarChartOutlined,
    PieChartOutlined,
    RadarChartOutlined,
    TagsOutlined,
    TableOutlined,
    LineChartOutlined
} from '@ant-design/icons'

const RouteConfig = [
    {
        'path': '/dashboard',
        'exact': true,
        'icon': <DashboardOutlined />,
        'title': 'Dashboard',
        'component':Dashboard
    }, {
        'path': '/table',
        'exact': true,
        'icon': <TableOutlined />,
        'title': 'Table',
        'component':Table
    },{
        'path': '/line',
        'exact': true,
        'icon': <LineChartOutlined />,
        'title': 'Line',
        'component':Line
    }, {
        'path': '/bar',
        'exact': true,
        'icon': <BarChartOutlined />,
        'title': 'Bar',
        'component':Bar
    }, {
        'path': '/pie',
        'exact': true,
        'icon': <PieChartOutlined />,
        'title': 'Pie',
        'component':Pie
    },  {
        'path': '/radar',
        'exact': true,
        'icon': <RadarChartOutlined />,
        'title': 'Radar',
        'component':Radar
    }, {
        'path': '/tagcloud',
        'exact': true,
        'icon': <TagsOutlined />,
        'title': 'Tag Cloud',
        'component':TagCloud
    },
]

export {RouteConfig}