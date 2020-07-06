import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Row, Col, Form, Button, DatePicker, Card } from 'antd'
import { Chart, Coordinate, Interval, Tooltip } from "bizcharts";
import locale from "antd/es/date-picker/locale/zh_CN";
import DataSet from "@antv/data-set";
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
        }]
    },
    {
        breadcrumbName: '平均机票价格',
    },
];


const CityAvgPrice = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [chartName, setChartName] = useState("")
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
                const resData = res.data.data.arr
                console.log(resData)
                setData(resData)
                const ds = new DataSet();
                const dv = ds.createView().source(resData);
                dv.source(resData).transform({
                    type: "sort",
                    callback(a, b) {
                        // 排序依据，和原生js的排序callback一致
                        return a.price - b.price;
                    }
                });
                setData(dv.rows.slice(0,15))
                setLoading(false)
            }
        }).catch((e) => {
            setLoading(false)
            alert(e)
        })
        // setTimeout(() => {
        //     setLoading(false)
        //     const res = [
        //         {city: "北京",price: 131744},
        //         {city: "上海",price: 104970},
        //         {city: "广州",price: 29034},
        //         {city: "深圳",price: 23489},
        //         {city: "厦门",price: 18203},
        //         {city: "珠海",price: 131744},
        //         {city: "天津",price: 104970},
        //         {city: "重庆",price: 29034},
        //         {city: "杭州",price: 23489},
        //         {city: "海口",price: 18203}
        //     ];

        // }, 1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="平均机票价格" routes={routes} />
            <div className="ab-container">
                <Card title={chartName} bordered={false}
                    extra={<DatePicker picker="month" locale={locale} onSelect={onDatePickerChange} defaultValue={new moment("201907", "YYYYMM")} allowClear={false} />} >
                    <Skeleton loading={loading} active>
                        {/* <div className="ab-chart-title">{chartName}</div> */}
                        <Row gutter={24}>
                            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                                <Chart height={600} data={data} autoFit scale={{price:{min:650}}}>
                                    <Coordinate transpose />
                                    <Interval position="city*price" style={{ cursor: "pointer" }} />
                                    <Tooltip showMarkers={false} />
                                </Chart>
                            </Col>
                            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                                this is detail
                            </Col>
                        </Row>
                    </Skeleton>
                </Card>
            </div>
        </div>
    );
}

export default CityAvgPrice;

