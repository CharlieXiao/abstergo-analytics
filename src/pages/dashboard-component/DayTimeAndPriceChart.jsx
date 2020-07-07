import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { Card } from 'antd'
import axios from 'axios';
import {host} from "../../config"

const DayTimeAndPriceChart = () => {

  const [dayTimePrice, setDayTimePrice] = useState([]);


  /**
   * 获取一天内不同时间的机票平均价格
   */
  const getAndSetDayTimePrice = () => {
    axios.get(host+"/flight/getDayTimePrice").then((res) => {
      if (res.data.success) {
        console.log(res.data.data);
        
        setDayTimePrice(res.data.data);
      } else {
        alert(res.data.msg);
      }
    }).catch((e) => {
      let data = [
        { 时间: "00:00", 价格: 233 },
        { 时间: "01:00", 价格: 3233 },
        { 时间: "02:00", 价格: 4233 },
        { 时间: "03:00", 价格: 5233 },
        { 时间: "04:00", 价格: 3233 },
        { 时间: "05:00", 价格: 2233 },
        { 时间: "06:00", 价格: 1233 },
      ];
      setDayTimePrice(data);
    })
  }


  useEffect(() => {
    getAndSetDayTimePrice();
  }, [])

  const config = {
    height: 400,
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
    data: dayTimePrice,
    xField: '时间',
    yField: '价格',
    xAxis: { label: { formatter: (v) => `${v}:00` } },
    yAxis:{
      min:500,
      max:1600
    },
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
    // tooltip:{
    //   visible:true,
    //   fields:['时间','价格'],
    //   formatter:{
       
    //   }
    // }
  };
  return (
    <Card title="一天内机票平均价格变化趋势">
      <Line {...config} />
    </Card>
  );
}


export default DayTimeAndPriceChart;