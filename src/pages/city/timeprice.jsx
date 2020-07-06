import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import axios from 'axios'
import { host } from '../../config'
import { Card, Switch } from 'antd';
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
    const [data, setData] = useState([]);
    const [dir,setDir] = useState('dep');   // dep or arr
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        axios.get('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'Revenue (Millions)',
        yField: 'Rating',
        xAxis: {
            visible: true,
            min: -5,
        },
    };
    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="最低价格时间段分布" routes={routes} />
            <div className="ab-container">
                <Card title="价格分布散点图" extra={<Switch />}>
                    <Scatter {...config} />
                </Card>
            </div>
        </div>
    )
}

export default TimePrice;