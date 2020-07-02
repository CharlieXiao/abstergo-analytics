import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
    DashboardOutlined,
    BarChartOutlined,
    BankOutlined,
    SendOutlined,
    RedditOutlined
} from '@ant-design/icons'
const { SubMenu,Item } = Menu

const PageKeyMapper = {
    "/dashboard":{key:"1",title:"概览 | Abstergo",openKey:""},
    "/city/minprice":{key:"2",title:"城市间最低机票价格 | Abstergo",openKey:"city"},
    "/city/avgprice":{key:"3",title:"城市平均机票价格 | Abstergo",openKey:"city"},
    "/city/linenum":{key:"4",title:"城市航班数 | Abstergo",openKey:"city"},
    // "/flight/avgprice":{key:"5",title:"平均机票价格 | Abstergo",openKey:"flight"},
    // "/flight/plane":{key:"6",title:"航班飞机偏好 | Abstergo",openKey:"flight"},
    // "/flight/linenum":{key:"7",title:"各大航空公司航班数 | Abstergo",openKey:"flight"},
    "/corona/price":{key:"8",title:"新冠与机票价格变化 | Abstergo",openKey:"corona"},
    "/corona/linenum":{key:"9",title:"新冠与航班数量变化 | Abstergo",openKey:"corona"},
    "/trivial":{key:"10",title:"你知道吗？ | Abstergo",openKey:""},
    "/flight/historyprice":{key:"11",title:"航班历史价格查询 | Abstergo",openKey:"flight"},
    "/flight/companyinfo":{key:"12",title:"航空公司相关信息 | Abstergo",openKey:"flight"},
}

// 页表menu组件
const PageMenu = () => {
    const location = useLocation()
    const [selectKey, setSelectKey] = useState([])
    const [openKey,setOpenKey] = useState([])
    useEffect(() => {
        const currPath = location.pathname
        if(PageKeyMapper[currPath]){
            const Pathkey = PageKeyMapper[currPath]
            setSelectKey([Pathkey.key])
            // 根据路由选择设置打开的菜单
            setOpenKey([Pathkey.openKey])
            document.title = Pathkey.title
        }else{
            // 路由错误
            setSelectKey("0")
            document.title = "内容不存在 | Abstergo "
        }
        // setSelectKey([location.pathname])
        // 仅在地址发生变化的时候执行该段代码
    }, [location])
    return (
        <Menu theme="light"
            selectedKeys={selectKey}
            openKeys={openKey}
            // defaultSelectedKeys={["1"]}
            mode="inline"
            className="ab-menu"
            onOpenChange = {(key)=>{setOpenKey(key)}}
            >
            <Item icon={<DashboardOutlined/>} key="1" title="Dashboard">
                <Link to="/dashboard">概览</Link>
            </Item>
            <SubMenu icon={<BankOutlined/>} key="city" title="城市" >
                <Item key="2">
                    <Link to="/city/minprice">最低机票价格</Link>
                </Item>
                <Item key="3">
                    <Link to="/city/avgprice">平均机票价格</Link>
                </Item>
                <Item key="4">
                    <Link to="/city/linenum">航班数</Link>
                </Item>
            </SubMenu>
            <SubMenu icon={<SendOutlined/>} key="flight" title="航班">
                <Item key="11">
                    <Link to="/flight/historyprice">历史价格查询</Link>
                </Item>
                {/* <Item key="5">
                    <Link to="/flight/avgprice">平均机票价格</Link>
                </Item>
                <Item key="6">
                    <Link to="/flight/plane">航班飞机偏好</Link>
                </Item>
                <Item key="7">
                    <Link to="/flight/linenum">各大航空公司航班数</Link>
                </Item> */}
                <Item key="12">
                    <Link to="/flight/companyinfo">航空公司相关信息</Link>
                </Item>
            </SubMenu>
            <SubMenu icon={<BarChartOutlined/>} key="corona" title="新冠疫情专题">
                <Item key="8">
                    <Link to="/corona/price">机票价格变化</Link>
                </Item>
                <Item key="9">
                    <Link to="/corona/linenum">航班数量变化</Link>
                </Item>
            </SubMenu>
            <Item icon={<RedditOutlined/>} key="10" title="你知道吗">
                <Link to="/trivial">你知道吗？</Link>
            </Item>
        </Menu>)
}

export default PageMenu