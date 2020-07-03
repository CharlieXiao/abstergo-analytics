import React, { useState, useEffect } from 'react'
import { Row, Col, Select } from 'antd'
import CitySelector from "../../component/citySelector";
import { Skeleton, Form, Button } from "antd";
import PageHeader from '../../component/pageheader'
import { ColumnLine } from '@ant-design/charts';
import { getCityByCode } from "../../city"
import { Card } from 'antd'

const PriceAffectedChart = () => {


    const [priceData, setPriceData] = useState([]);
    const [affectedData, setAffectedData] = useState([]);


    useEffect(() => {
        //获取priceData和affecteddata
        let priceData = [
            { 时间: '2019-03-10', 价格: 350, },
            { 时间: '2019-03-20', 价格: 360, },
            { 时间: '2019-03-30', 价格: 370, },
            { 时间: '2019-04-10', 价格: 380, },
            { 时间: '2019-04-20', 价格: 550, },
            { 时间: '2019-04-30', 价格: 250, },
            { 时间: '2019-05-10', 价格: 850, },
            { 时间: '2019-05-20', 价格: 950, },
            { 时间: '2019-05-30', 价格: 350, },
            { 时间: '2019-06-10', 价格: 350, },
        ];
        let affectedData = [
            { 时间: '2019-03-10', 感染人数: 23, },
            { 时间: '2019-03-20', 感染人数: 35, },
            { 时间: '2019-03-30', 感染人数: 89, },
            { 时间: '2019-04-10', 感染人数: 69, },
            { 时间: '2019-04-20', 感染人数: 345, },
            { 时间: '2019-04-30', 感染人数: 2220, },
            { 时间: '2019-05-10', 感染人数: 3500, },
            { 时间: '2019-05-20', 感染人数: 4500, },
            { 时间: '2019-05-30', 感染人数: 7000, },
            { 时间: '2019-06-10', 感染人数: 10000, },

        ];

        setPriceData(priceData);
        setAffectedData(affectedData);
    }, []);

    const config = {
        title: {
            visible: false,
            text: '柱线混合图',
        },
        description: {
            visible: false,
            text: '柱线混合图表',
        },
        data: [affectedData, priceData],
        xField: '时间',
        yField: ['感染人数', '价格'],
        columnConfig: { color: '#b71c1c' }, //A52A2A
        lineConfig: {
            color: 'rgb(91,143,249)',
            point: { visible: true, shape: 'diamond' },
            label: { visible: true },
            lineSize: 2,
        },
    };

    return (
        <Card title="全年各市航班价格平均值">
            <ColumnLine {...config} />
        </Card>
    )

}

export default PriceAffectedChart