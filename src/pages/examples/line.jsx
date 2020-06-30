import React, { useState, useEffect } from 'react';
import { Line as LineChart } from '@ant-design/charts';
import {
    Col,Row,Skeleton
} from 'antd';

const config = {
    title: {
        visible: true,
        text: '配置折线数据点样式',
    },
    // description: {
    //     visible: true,
    //     text: '自定义配置趋势线上数据点的样式',
    // },
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
    label: {
        visible: true,
        type: 'point',
    },
    point: {
        visible: true,
        size: 5,
        shape: 'diamond',
        style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2,
        },
    },
};

const Line = () => {
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState([])

    useEffect(()=>{
        // 模拟网络请求
        setTimeout(()=>{
            const netData = [
                {
                    year: '1991',
                    value: 3,
                },
                {
                    year: '1992',
                    value: 4,
                },
                {
                    year: '1993',
                    value: 3.5,
                },
                {
                    year: '1994',
                    value: 5,
                },
                {
                    year: '1995',
                    value: 4.9,
                },
                {
                    year: '1996',
                    value: 6,
                },
                {
                    year: '1997',
                    value: 7,
                },
                {
                    year: '1998',
                    value: 9,
                },
                {
                    year: '1999',
                    value: 13,
                },
            ];
            setData(netData)
            setLoading(false)
        },1000)
    },[])

    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active>
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active >
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active >
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active >
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active >
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active >
                        <LineChart {...config} data={data} style={{height:"25vh"}}/>
                    </Skeleton>
                </div>
            </Col>
        </Row>
    );
}

export default Line;