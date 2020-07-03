import React, { useState, useEffect } from 'react'
import { Row, Col, Select } from 'antd'
import CitySelector from "../../component/citySelector";
import { Skeleton, Form, Button } from "antd";
import PageHeader from '../../component/pageheader'
import { ColumnLine } from '@ant-design/charts';
import { getCityByCode } from "../../city"

const LineNumAffectedTotalChart = () => {


    const [affectedData,setAffectedData] = useState([]);
    const [lineNumData,setLineNumData] = useState([]);


    useEffect(()=>{
        //获取priceData和affecteddata
        let lineNumData = [
        { 时间: '2019-03-10', 航班起降数: 3540, },
        { 时间: '2019-03-20', 航班起降数: 3610, },
        { 时间: '2019-03-30', 航班起降数: 3270, },
        { 时间: '2019-04-10', 航班起降数: 1380, },
        { 时间: '2019-04-20', 航班起降数: 1550, },
        { 时间: '2019-04-30', 航班起降数: 250, },
        { 时间: '2019-05-10', 航班起降数: 3850, },
        { 时间: '2019-05-20', 航班起降数: 5950, },
        { 时间: '2019-05-30', 航班起降数: 7350, },
        { 时间: '2019-06-10', 航班起降数: 2350, },
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

        setLineNumData(lineNumData);
        setAffectedData(affectedData);
    },[]);
    
    const config = {
        title: {
            visible: false,
            text: '柱线混合图',
        },
        description: {
            visible: false,
            text: '柱线混合图表',
        },
        data: [affectedData, lineNumData],
        xField: '时间',
        yField: ['感染人数', '航班起降数'],
        columnConfig: { color: '#b71c1c' }, //A52A2A
        lineConfig: {
            color: '#008080',
            point: { visible: true, shape: 'diamond' },
            label: { visible: true },
            lineSize: 2,
        },
    };

    return <ColumnLine {...config} />;

}

export default LineNumAffectedTotalChart;