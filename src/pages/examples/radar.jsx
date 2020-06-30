import React, { useEffect, useState } from 'react';
import { Radar as RadarChart } from '@ant-design/charts';
import useSelection from 'antd/es/table/hooks/useSelection';
import { Row, Col, Skeleton } from 'antd';

const config = {
    title: {
        visible: true,
        text: '多组雷达图',
    },
    angleField: 'item',
    radiusField: 'score',
    seriesField: 'user',
    radiusAxis: {
        grid: {
            line: {
                type: 'line',
            },
        },
    },
    line: {
        visible: true,
    },
    point: {
        visible: true,
        shape: 'circle',
    },
    legend: {
        visible: true,
        position: 'bottom-center',
    },
};

const Radar = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            const pieData = [
                {
                    item: 'Design',
                    user: 'a',
                    score: 70,
                },
                {
                    item: 'Design',
                    user: 'b',
                    score: 30,
                },
                {
                    item: 'Development',
                    user: 'a',
                    score: 60,
                },
                {
                    item: 'Development',
                    user: 'b',
                    score: 70,
                },
                {
                    item: 'Marketing',
                    user: 'a',
                    score: 60,
                },
                {
                    item: 'Marketing',
                    user: 'b',
                    score: 50,
                },
                {
                    item: 'Users',
                    user: 'a',
                    score: 40,
                },
                {
                    item: 'Users',
                    user: 'b',
                    score: 50,
                },
                {
                    item: 'Test',
                    user: 'a',
                    score: 60,
                },
                {
                    item: 'Test',
                    user: 'b',
                    score: 70,
                },
                {
                    item: 'Language',
                    user: 'a',
                    score: 70,
                },
                {
                    item: 'Language',
                    user: 'b',
                    score: 50,
                },
                {
                    item: 'Technology',
                    user: 'a',
                    score: 50,
                },
                {
                    item: 'Technology',
                    user: 'b',
                    score: 40,
                },
                {
                    item: 'Support',
                    user: 'a',
                    score: 30,
                },
                {
                    item: 'Support',
                    user: 'b',
                    score: 40,
                },
                {
                    item: 'Sales',
                    user: 'a',
                    score: 60,
                },
                {
                    item: 'Sales',
                    user: 'b',
                    score: 40,
                },
                {
                    item: 'UX',
                    user: 'a',
                    score: 50,
                },
                {
                    item: 'UX',
                    user: 'b',
                    score: 60,
                },
            ];
            setData(pieData)
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={8}>
                <div className="ab-card">
                    <Skeleton active loading={loading}>
                        <RadarChart {...config} data={data} style={{height:"35vh"}}/>
                    </Skeleton>
                </div>
            </Col>
        </Row>
    );
};

export default Radar;
