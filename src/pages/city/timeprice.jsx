import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import axios from 'axios'
import { host } from '../../config'
import { Card, Col, Row } from 'antd';
import { Scatter } from '@ant-design/charts'
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
            path: '/city/avgprice',
            title: '平均机票价格'
        }, {
            path: '/city/linenum',
            title: '各市航班数量'
        }]
    },
    {
        breadcrumbName: '最低价格时间段分布',
    },
];

const TimePrice = () => {
    const [arrData, setArrData] = useState([]);
    const [depData, setDepData] = useState([]);
    // const [dir,setDir] = useState(true);   // true is 'dep' , false is 'arr'
    useEffect(() => {
        asyncFetch()
    }, [])

    const asyncFetch = () => {
        axios.get(host + '/flight/getFliMinPriTime')
            .then((response) => {
                console.log(response)
                setArrData(response.data.data.arr)
                setDepData(response.data.data.dep)
                // const res = {
                //     arr: [
                //         { city: '北京', clock: '01.23', price: 809 },
                //         { city: '上海', clock: '03.24', price: 345 },
                //         { city: '广州', clock: '05.24', price: 234 },
                //         { city: '深圳', clock: '07.24', price: 453 },
                //         { city: '厦门', clock: '09.24', price: 1231 },
                //         { city: '重庆', clock: '11.24', price: 321 },
                //         { city: '天津', clock: '13.24', price: 468 }
                //     ],
                //     dep: [
                //         { city: '北京', clock: '01.25', price: 123 },
                //         { city: '上海', clock: '03.25', price: 456 },
                //         { city: '广州', clock: '05.25', price: 789 },
                //         { city: '深圳', clock: '07.25', price: 910 },
                //         { city: '厦门', clock: '09.25', price: 1234 },
                //         { city: '重庆', clock: '11.25', price: 2134 },
                //         { city: '天津', clock: '13.25', price: 678 }
                //     ]
                // }
                // setDepData(res.arr)
                // setArrData(res.dep)
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        // 设置字段显示格式
        meta: {
            city: {
                alias: '城市'
            },
            clock: {
                alias: '起飞时间',
                formatter: (v) => { return `${String(v).split('.').join(':')}` }
            },
            price: {
                alias: '价格',
                formatter: (v) => { return `￥${v}` }
            }
        },
        xField: 'clock',
        yField: 'price',
        // colorField:'city',
        xAxis: {
            tickCount: 12,
            min: 0,
            max: 23
        },
        tooltip: {
            fields: ['city', 'clock', 'price']
        },
        forceFit:true
    };

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="最低价格时间段分布" routes={routes} />
            <div className="ab-container">
                <Row gutter={[24, 24]}>
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                        <Card title="价格分布散点图（出发）" >
                            <Scatter {...config} data={arrData} />
                        </Card>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                        <Card title="价格分布散点图（到达）" >
                            <Scatter {...config} data={depData} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default TimePrice;