import React, { useState, useEffect } from 'react'
import {
    Layout, Menu, Drawer
} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/abstergo.jpg'
import { RouteConfig } from '../utils/config'

const { Header, Sider, Footer, Content } = Layout


const PageLayout = ({ children }) => {
    const location = useLocation()
    const [selectKey, setSelectKey] = useState(['0'])
    const [collapsed, setCollapsed] = useState(false)
    const [isHome,setIsHome] = useState(true)
    const [useSider, setUseSider] = useState(document.body.clientWidth > 578 ? true : false)
    // 根据location来确定选择的key
    useEffect(() => {
        let key = -1
        for (let i = 0; i < RouteConfig.length; i++) {
            if (RouteConfig[i].path === location.pathname) {
                key = i
            }
        }
        if (key !== -1) {
            document.title = RouteConfig[key].title
        } else if (location.pathname === '/'){
            document.tile = 'home'
            setIsHome(true)
        } else{
            document.title = '404'
        }
        setSelectKey([String(key)])
        // 仅在地址发生变化的时候执行该段代码
    }, [location])

    const handleCollapsed = () => {
        setCollapsed(collapsed ? false : true)
    }

    const handleBreakPoint = (broken) => {
        console.log(broken)
        if (broken) {
            setUseSider(false)
            setCollapsed(true)
        } else {
            setUseSider(true)
        }
    }

    const closeDrawer = () => {
        setCollapsed(true)
    }

    return (
        <Layout style={{minHeight:"100vh"}}>
            <Sider theme="light" collapsed={collapsed}
                collapsedWidth={80}
                width={256} height={"100%"}
                className="ab-sider"
                onBreakpoint={handleBreakPoint}
                breakpoint={"sm"}
                trigger={null} hidden={!useSider}>
                <div className="ab-logo-container">
                    <img src={logo} alt="logo" className="ab-logo-img" />
                    <div className="ab-logo-text" hidden={collapsed}>Abstergo</div>
                </div>
                <Menu theme="light"
                    selectedKeys={selectKey}
                    defaultSelectedKeys={["1"]}
                    mode="inline" className="ab-menu">
                    {RouteConfig.map((route, index) => {
                        return (
                            <Menu.Item icon={route.icon} key={index} title={route.title} className="ab-menu-item">
                                <Link to={route.path}>{route.title}</Link>
                            </Menu.Item>)
                    })}
                </Menu>
            </Sider>

            <Drawer visible={!(useSider | collapsed)} onClose={closeDrawer} width={256} placement={"left"} closable={false}>
                <div className="ab-logo-container">
                    <img src={logo} alt="logo" className="ab-logo-img" />
                    <div className="ab-logo-text" hidden={collapsed}>Abstergo</div>
                </div>
                <Menu theme="light"
                    selectedKeys={selectKey}
                    defaultSelectedKeys={["1"]}
                    mode="inline" className="ab-menu">
                    {RouteConfig.map((route, index) => {
                        return (
                            <Menu.Item icon={route.icon} key={index} title={route.title} className="ab-menu-item">
                                <Link to={route.path}>{route.title}</Link>
                            </Menu.Item>)
                    })}
                </Menu>
            </Drawer>
            <Layout>
                <Header className="ab-header">
                    {
                        collapsed
                            ? <MenuUnfoldOutlined className="ab-collapsed"
                                onClick={handleCollapsed} />
                            : <MenuFoldOutlined className="ab-collapsed"
                                onClick={handleCollapsed} />
                    }
                </Header>
                <Content className="ab-container">
                    {children}
                </Content>
                <Footer className="ab-footer">
                    <p>Abstergo Analytics ©2020</p>
                    Powered by Ant Design
                </Footer>
            </Layout>
        </Layout>
    );
}

export default PageLayout