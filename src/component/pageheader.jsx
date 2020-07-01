import React from 'react'
import { Breadcrumb, Menu } from 'antd'
import { Link } from 'react-router-dom'


/*
// title 当前页面title
// routes格式
const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '城市间平均价格'
        }, {
            path: '/city/linenum',
            title: '城市航班数'
        }]
    },
    {
        breadcrumbName: '城市间平均价格',
    },
];

*/

const PageHeader = ({ title, routes }) => {
    return (
        <div className="ab-page-header">
            <Breadcrumb>
                {
                    routes.map((element, index) => {
                        if (element.menu) {
                            const menu = (
                                // 渲染menu
                                <Menu>
                                    {
                                        element.menu.map((item, index) => {
                                            return (<Menu.Item key={index}>
                                                <Link to={item.path}>{item.title}</Link>
                                            </Menu.Item>)
                                        })
                                    }
                                </Menu>)
                            return (
                                // 渲染breadcrumb
                                <Breadcrumb.Item key={index} overlay={menu}>
                                    {element.breadcrumbName}
                                </Breadcrumb.Item>)
                        } else {
                            return (
                                <Breadcrumb.Item key={index}>
                                    {element.path
                                        ? <Link to={element.path}>{element.breadcrumbName}</Link>
                                        : <span>{element.breadcrumbName}</span>}
                                </Breadcrumb.Item>)
                        }
                    })
                }
            </Breadcrumb>
            <div className="ab-page-header-heading-title">{title}</div>
        </div>
    )
}

export default PageHeader