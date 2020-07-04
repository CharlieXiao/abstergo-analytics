import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart, Interval, Tooltip, Interaction } from 'bizcharts'
import { Card } from 'antd'
import host from '../../config'
import axios from 'axios'

const CompanyPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(host+'/dashboard/getCompanyAvgPrice').then((res)=>{
            if(res.data.success){
                console.log(res.data.data)
                setData(res.data.data)
            }else{
                alert(res.data.msg)
            }
        }).catch((e)=>{
            console.log(e)
            alert(e)
        })
    },[])

    return (
        <Card title="全年各航空公司航班平均价格">
            <Chart height={400} data={data} autoFit scale={{ avg_price: { min: 700 } }}>
                {/* 设置成条形图 */}
                {/* <Coordinate transpose /> */}
                <Interval position="company*avg_price" />
                <Tooltip showMarkers={false} />
                <Interaction type="active-region" />
            </Chart>
        </Card>
    )
}

export default CompanyPriceBarChart