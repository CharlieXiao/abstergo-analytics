import React, { useState, useEffect } from 'react'
import { ColumnLine } from '@ant-design/charts';
import { Card } from 'antd'
import axios from 'axios'
import {host} from "../../config"

const PriceAffectedChart = () => {


    const [priceData, setPriceData] = useState([]);
    const [affectedData, setAffectedData] = useState([]);


    /**
     * 每月获取全国所有感染人数
     */
    const getAndSetAffectedData = ()=>{
        axios.get(host+"/corona/getTotalAffected").then((res)=>{    
            console.log(res);
                  
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
     * 每月获取全国机票平均价格
     */
    const getAndSetPriceData = () =>{
        axios.get(host+"/flight/getTotalPrice").then((res)=>{
            if(res.data.success){
                console.log(res.data.data);
                
                setPriceData(res.data.data);
            }else{
                alert(res.data.msg);
            }
        }).catch((e)=>{
            let priceData = [
                { 时间: '2020-01', 价格: 23, },
                { 时间: '2020-02', 价格: 35, },
                { 时间: '2020-03', 价格: 89, },
                { 时间: '2020-04', 价格: 69, },
                { 时间: '2020-05', 价格: 345, },
                { 时间: '2020-06', 价格: 2220, },
            ];
            setPriceData(priceData);
        })
    }

    useEffect(() => {
        getAndSetPriceData();
        getAndSetAffectedData();
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