import React, { useState } from 'react'
import {
    Layout, Drawer
} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import {
    useHistory
} from 'react-router-dom'
import logo from '../img/abstergo.jpg'
import PageMenu from './menu'
import PageRouter from './pagerouter'

const { Header, Sider, Footer, Content } = Layout

const PageLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [useSider, setUseSider] = useState(document.body.clientWidth > 578 ? true : false)
    const history = useHistory()
    const handleCollapsed = () => {
        setCollapsed(collapsed ? false : true)
    }

    const handleBreakPoint = (broken) => {
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
        <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light" collapsed={collapsed}
                collapsedWidth={80}
                width={256} height={"100%"}
                className="ab-sider"
                onBreakpoint={handleBreakPoint}
                breakpoint={"sm"}
                trigger={null} hidden={!useSider}>
                <div className="ab-logo-container" onClick={() => { history.push("/") }}>
                    <img src={logo} alt="logo" className="ab-logo-img" />
                    <div className="ab-logo-text" hidden={collapsed}>Abstergo</div>
                </div>
                <PageMenu />
            </Sider>

            {!useSider &&
                <Drawer visible={!collapsed} onClose={closeDrawer} width={256} placement={"left"} closable={false}>
                    <div className="ab-logo-container">
                        <img src={logo} alt="logo" className="ab-logo-img" />
                        <div className="ab-logo-text" hidden={collapsed}>Abstergo</div>
                    </div>
                    <PageMenu />
                </Drawer>
            }
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
                <Content>
                    <PageRouter />
                </Content>
                <Footer className="ab-footer">
                    Abstergo Analytics ©2020 | Powered by Ant Design
                </Footer>
            </Layout>
        </Layout>
    );
}

export default PageLayout