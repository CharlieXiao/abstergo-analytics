import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { Card } from 'antd'

const DayTimeAndPriceChart = ()=>{

    const [dayTimePrice,setDayTimePrice] = useState([]);

    useEffect(()=>{
        setDayTimePrice([
            {时间:"00:00",平均机票价格:233},
            {时间:"01:00",平均机票价格:3233},
            {时间:"02:00",平均机票价格:4233},
            {时间:"03:00",平均机票价格:5233},
            {时间:"04:00",平均机票价格:3233},
            {时间:"05:00",平均机票价格:2233},
            {时间:"06:00",平均机票价格:1233},
        ])
    },[])

      const config = {
        height:"300",
        title: {
          visible: false,
          text: '配置折线数据点样式',
        },
        description: {
          visible: false,
          text: '自定义配置趋势线上数据点的样式',
        },
        padding: 'auto',
        forceFit: true,
        data:dayTimePrice,
        xField: '时间',
        yField: '平均机票价格',
        label: {
          visible: true,
          type: 'point',
        },
        color: "#FF4500",
        point: {
          visible: true,
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#FF4500',
            lineWidth: 2,
          },
        },
      };
      return(
        <Card title="全年各市航班价格平均值">
           <Line {...config} />
        </Card>
      );
}


export default DayTimeAndPriceChart;