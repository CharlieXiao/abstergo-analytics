import React, { useState, useEffect } from 'react'
import { Column as BarChart } from '@ant-design/charts';
import {
    Row, Col, Skeleton
} from 'antd'

const config = {
    title: {
        visible: true,
        text: '基础柱状图',
    },
    forceFit: true,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
        type: {
            alias: '类别',
        },
        sales: {
            alias: '销售额(万)',
        },
    },
};

const Bar = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            const productData = [
                {
                    type: '家具家电',
                    sales: 38,
                },
                {
                    type: '粮油副食',
                    sales: 52,
                },
                {
                    type: '生鲜水果',
                    sales: 61,
                },
                {
                    type: '美容洗护',
                    sales: 145,
                },
                {
                    type: '母婴用品',
                    sales: 48,
                },
                {
                    type: '进口食品',
                    sales: 38,
                },
                {
                    type: '食品饮料',
                    sales: 38,
                },
                {
                    type: '家庭清洁',
                    sales: 38,
                },
            ];
            setData(productData)
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <BarChart {...config} data={data} style={{height:"30vh"}}/>
                    </Skeleton>
                </div>
            </Col>
        </Row>
    );
}

export default Bar;
