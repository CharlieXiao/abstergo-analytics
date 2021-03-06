import React, { useState, useEffect } from 'react'
import { Menu, Affix } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
    DashboardOutlined,
    BarChartOutlined,
    BankOutlined,
    SendOutlined,
    RedditOutlined
} from '@ant-design/icons'
const { SubMenu, Item } = Menu

const PageKeyMapper = {
    "/dashboard": { key: "1", title: "概览 | PaperPlane", openKey: "" },
    "/city/minprice": { key: "2", title: "城市间最低机票价格 | PaperPlane", openKey: "city" },
    "/city/avgprice": { key: "3", title: "城市平均机票价格 | PaperPlane", openKey: "city" },
    "/city/linenum": { key: "4", title: "各市航班数量 | PaperPlane", openKey: "city" },
    "/corona/price": { key: "8", title: "新冠与机票价格变化 | PaperPlane", openKey: "corona" },
    "/corona/linenum": { key: "9", title: "新冠与航班数量变化 | PaperPlane", openKey: "corona" },
    "/trivial": { key: "10", title: "你知道吗？ | PaperPlane", openKey: "" },
    "/flight/historyprice": { key: "11", title: "航班历史价格查询 | PaperPlane", openKey: "flight" },
    "/flight/companyinfo": { key: "12", title: "航空公司相关信息 | PaperPlane", openKey: "flight" },
    "/city/timeprice":{key:"13",title:"最低价格时间段分布 | PaperPlane",openKey:"city"},
    "/flight/timecompanylinenum":{key:"14",title:"航空公司起降数时间段变化趋势 | PaperPlane",openKey:"flight"}
    

}

// 页表menu组件
const PageMenu = () => {
    const location = useLocation()
    const [selectKey, setSelectKey] = useState([])
    const [openKey, setOpenKey] = useState([])
    useEffect(() => {
        const currPath = location.pathname
        if (PageKeyMapper[currPath]) {
            const Pathkey = PageKeyMapper[currPath]
            setSelectKey([Pathkey.key])
            // 根据路由选择设置打开的菜单
            setOpenKey([Pathkey.openKey])
            document.title = Pathkey.title
        } else {
            // 路由错误
            setSelectKey("0")
            document.title = "内容不存在 | PaperPlane "
        }
        // setSelectKey([location.pathname])
        // 仅在地址发生变化的时候执行该段代码
    }, [location])
    return (
        <Affix>
            <Menu theme="light"
                selectedKeys={selectKey}
                openKeys={openKey}
                // defaultSelectedKeys={["1"]}
                mode="inline"
                className="ab-menu"
                onOpenChange={(key) => { setOpenKey(key) }}
            >
                <Item icon={<DashboardOutlined />} key="1" title="Dashboard">
                    <Link to="/dashboard">概览</Link>
                </Item>
                <SubMenu icon={<BankOutlined />} key="city" title="城市" >
                    <Item key="2">
                        <Link to="/city/minprice">最低机票价格</Link>
                    </Item>
                    <Item key="3">
                        <Link to="/city/avgprice">平均机票价格</Link>
                    </Item>
                    <Item key="4">
                        <Link to="/city/linenum">各市航班数量</Link>
                    </Item>
                    <Item key="13">
                        <Link to="/city/timeprice">最低价格时间段分布</Link>
                    </Item>
                </SubMenu>
                <SubMenu icon={<SendOutlined />} key="flight" title="航班">
                    <Item key="11">
                        <Link to="/flight/historyprice">历史价格查询</Link>
                    </Item>
                    <Item key="12">
                        <Link to="/flight/companyinfo">航空公司相关信息</Link>
                    </Item>
                    <Item key="14">
                        <Link to="/flight/timecompanylinenum">航空公司起降数时间段</Link>
                    </Item>
                </SubMenu>
                <SubMenu icon={<BarChartOutlined />} key="corona" title="新冠疫情专题">
                    <Item key="8">
                        <Link to="/corona/price">机票价格变化</Link>
                    </Item>
                    <Item key="9">
                        <Link to="/corona/linenum">航班数量变化</Link>
                    </Item>
                </SubMenu>
                <Item icon={<RedditOutlined />} key="10" title="你知道吗">
                    <Link to="/trivial">你知道吗？</Link>
                </Item>
            </Menu>
        </Affix>)
}

export default PageMenu