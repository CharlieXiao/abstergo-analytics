import React, { useState, useEffect } from 'react'
import { Chart, Interval, Tooltip, Coordinate } from 'bizcharts'
import { Card,Switch } from 'antd'
import {host} from '../../config'
import axios from 'axios'

const YearPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        asyncFetch("dep")
    }, [])

    const asyncFetch = (type)=>{
        axios.get(host+"/flight/getAllyearAvgPrice",{params:{
            type:type
        }}).then((res)=>{
            if(res.data.success){
                let response = res.data.data
                console.log(res.data.data)
                response = response.sort((a,b)=>a.price - b.price)
                setData(response)
            }else{
                console.log(res.data.msg)
            }
        }).catch((e)=>{
            console.log(e)
            alert(e)
        })
    }

    const onSwitchChange = (checked)=>{
        console.log("change...")
        if(checked){
            asyncFetch("dep")
        }else{
            asyncFetch("arr")
        }

    }

    return (
    <Card title="全年各市航班价格平均值" extra={
        <div>
            <span>从该城市出发？</span>
            <Switch style={{ marginLeft: "24px" }} onChange={onSwitchChange} defaultChecked />
        </div>
    }>
            <Chart height={300} data={data} autoFit scale={{price:{min:800}}}>
                {/* 设置成条形图 */}
                <Coordinate transpose />
                <Interval position="city*price" tooltip={{fields:['price'],callback:(v)=>{
                    return {
                        name:'平均价格',
                        value:`￥${v}`
                    }
                }}} />
                <Tooltip showMarkers={false} />
            </Chart>
        </Card>
    )
}

export default YearPriceBarChart