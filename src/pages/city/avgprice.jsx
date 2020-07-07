import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Row, Col, DatePicker, Card, Table, Switch } from 'antd'
import { Chart, Coordinate, Interval, Tooltip } from "bizcharts";
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from 'moment'
import axios from 'axios'
import { host } from '../../config'

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '最低机票价格'
        }, {
            path: '/city/linenum',
            title: '各市航班数量'
        }, {
            path: '/city/timeprice',
            title: '最低价格时间段分布'
        }]
    },
    {
        breadcrumbName: '平均机票价格',
    },
];

const columns = [
    {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        render:(value)=> `￥${value}` ,
        sorter: (a, b) => a.price - b.price,
        // 禁止排序恢复到默认状态
        sortDirections: ['descend', 'ascend', 'descend'],
    },
];

const CityAvgPrice = () => {

    const [data, setData] = useState([])
    const [chartData, setChartData] = useState([])
    const [loading, setLoading] = useState(true)
    const [chartName, setChartName] = useState("")
    const [min, setMin] = useState(0)
    useEffect(() => {
        onDatePickerChange(new moment("201907", "YYYYMM"))
    }, [])

    const onDatePickerChange = (date) => {
        setLoading(true)
        setChartName(`${date.format("YYYY年M月")} 各城市平均机票价格排名`)
        axios.get(host + "/city/getCityAvgPrices", {
            params: {
                month: date.format("YYYY-MM")
            }
        }).then((res) => {
            if (res.data.success) {
                let depData = res.data.data.dep
                depData = depData.sort((a, b) => a.price - b.price)
                setData(res.data.data)
                setChartData(depData)
                setMin(Math.floor(depData[0].price / 100) * 100)
                setLoading(false)
            }
        }).catch((e) => {
            setLoading(false)
            alert(e)
        })
    }

    const onSwitchChange = (checked) => {
        if (checked) {
            console.log(data)
            let depData = data.dep
            depData = depData.sort((a, b) => a.price - b.price)
            console.log(depData)
            setChartData(depData)
            setMin(Math.floor(depData[0].price / 100) * 100)
        } else {
            console.log(data)
            let arrData = data.arr
            arrData = arrData.sort((a, b) => a.price - b.price)
            console.log(arrData)
            setChartData(arrData)
            setMin(Math.floor(arrData[0].price / 100) * 100)
        }
        // setDir(checked)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="平均机票价格" routes={routes} />
            <div className="ab-container">
                <Card title={chartName} bordered={false}
                    extra={
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            从该城市 <span style={{color:"#1890ff"}}>出发</span> 或  <span style={{color:"grey"}}>到达</span>
                            <Switch style={{ margin: "0 24px 0 24px" }} onChange={onSwitchChange} defaultChecked />
                            <DatePicker picker="month" locale={locale} onSelect={onDatePickerChange} defaultValue={new moment("201907", "YYYYMM")} allowClear={false} />
                        </div>}
                >
                    <Skeleton loading={loading} active>
                        {/* <div className="ab-chart-title">{chartName}</div> */}
                        <Row gutter={[24, 24]}>
                            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                                <Chart height={600} data={chartData.slice(0, 15)} autoFit scale={{ price: { min: min } }}>
                                    <Coordinate transpose />
                                    <Interval position="city*price" style={{ cursor: "pointer" }} tooltip={{fields:['price'],callback:(value)=>{
                                        return {
                                            name:'价格',
                                            value:`￥${value}`
                                        }
                                    }}} />
                                    <Tooltip showMarkers={false} />
                                </Chart>
                            </Col>
                            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                                <Table columns={columns} dataSource={chartData} rowKey="city" />
                            </Col>
                        </Row>
                    </Skeleton>
                </Card>
            </div>
        </div>
    );
}

export default CityAvgPrice;

