import React, { useState, useEffect } from 'react';
import { Calendar } from '@ant-design/charts';
import { Card } from 'antd';
import {host} from '../../config'
import axios from 'axios'


const LineNumCalendar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    // fetch('https://gw.alipayobjects.com/os/antfincdn/vIirZPDIu%26/contributions.json')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    //   .catch(error => {
    //     console.log('fetch data failed', error);
    //   });
    axios.get(host+'/flight/getFlightTotalNumByDay').then((res)=>{
      if(res.data.success){
        console.log(res.data.data)
        const cleanUp = []
        res.data.data.forEach((element)=>{
          cleanUp.push({
            'date':element.flightDate,
            'linenum':element.linenum
          })
        })
        setData(cleanUp)
      }else{
        alert("数据请求失败")
      }
    }).catch((e)=>{
      alert(e)
    })
  };
  const config = {
    forceFit:true,
    height:300,
    data,
    dateField: 'date',
    valueField: 'linenum',
    dateRange: ['2020-04-01', '2020-06-30'],
    months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',],
    weeks:['日','一','二','三','四','五','六'],
    colors: '#BAE7FF-#1890FF', // -#0050B3
    padding: 'auto',
    xAxis: {
      title: {
        text: '月份',
      },
    },
    yAxis: {
      title: null,
    },
    label: {
      visible: false,
    },
    meta:{
      linenum:{
        alias:'航班起降数'
      },
      flightDate:{
        alias:'日期',
      }
    }
  };
  return (
    <Card title="航班起降数日历图">
      <Calendar {...config} />
    </Card>
  );
};
export default LineNumCalendar;