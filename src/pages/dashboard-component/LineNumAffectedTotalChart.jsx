import React, { useState, useEffect } from 'react'
import { ColumnLine } from '@ant-design/charts';
import { Card } from 'antd'
import axios from 'axios'
import {host} from "../../config"

const LineNumAffectedTotalChart = () => {


    const [affectedData,setAffectedData] = useState([]);
    const [lineNumData,setLineNumData] = useState([]);

    /**
     * 每月获取全国所有感染人数
     */
    const getAndSetAffectedData = ()=>{
        axios.get(host+"/corona/getTotalAffected").then((res)=>{                   
            if(res.data.success){
                let tmpData = res.data.data;
                let data =[];
                for(let index in tmpData){
                    data.push({时间:tmpData[index].dateId,感染人数:tmpData[index].confirmedCount});
                }
                console.log(data);
                setAffectedData(data);
            }else{
                alert(res.data.msg);
            }
        }).catch((e)=>{
            let affectedData = [
                { 时间: '2020-01', 感染人数: 23, },
                { 时间: '2020-02', 感染人数: 35, },
                { 时间: '2020-03', 感染人数: 89, },
                { 时间: '2020-04', 感染人数: 69, },
                { 时间: '2020-05', 感染人数: 345, },
                { 时间: '2020-06', 感染人数: 2220, },
            ];
            setAffectedData(affectedData);
        })
    }

    /**
     * 每月获取全国航班数
     */
    const getAndSetLineNumData = () =>{
        axios.get(host+"/flight/getTotalFlightsNum").then((res)=>{
            if(res.data.success){
                console.log(res.data.data);
                setLineNumData(res.data.data);
            }else{
                alert(res.data.msg);
            }
        }).catch((e)=>{
            let lineNumData = [
                { 时间: '2020-01', 起降数: 3540, },
                { 时间: '2020-02', 起降数: 3610, },
                { 时间: '2020-03', 起降数: 3270, },
                { 时间: '2020-04', 起降数: 1380, },
                { 时间: '2020-05', 起降数: 1550, },
                { 时间: '2020-06', 起降数: 250, },
                ];
                
            setLineNumData(lineNumData);
        })
    }


    useEffect(()=>{
        getAndSetAffectedData();
        getAndSetLineNumData();
        
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
        yField: ['感染人数', '起降数'],
        columnConfig: { color: '#ef5350' }, //A52A2A #b71c1c
        lineConfig: {
            color: '#00bcd4', // #008080
            point: { visible: true, shape: 'diamond' },
            label: { visible: true },
            lineSize: 3,
        },
    };

    return (
        <Card title="新冠疫情感染人数和航班起降数变化趋势图">
            <ColumnLine {...config} />
        </Card>  
    )

}

export default LineNumAffectedTotalChart;