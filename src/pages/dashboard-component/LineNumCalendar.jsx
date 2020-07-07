import React, { useState, useEffect } from 'react';
import { Calendar } from '@ant-design/charts';
import { Card } from 'antd';
import {host} from '../../config'
import axios from 'axios'


const res = [
  { "date": "2017-05-01", "linenum": 1, },
  { "date": "2017-05-02", "linenum": 1, },
  { "date": "2017-05-03", "linenum": 1, },
  { "date": "2017-05-04", "linenum": 1, },
  { "date": "2017-05-05", "linenum": 1, },
  { "date": "2017-05-06", "linenum": 1, },
  { "date": "2017-05-07", "linenum": 1, },
  { "date": "2017-05-08", "linenum": 1, },
  { "date": "2017-05-09", "linenum": 1, },
  { "date": "2017-05-10", "linenum": 1, },
  { "date": "2017-05-11", "linenum": 1, },
  { "date": "2017-05-12", "linenum": 1, },
  { "date": "2017-05-13", "linenum": 1, },
  { "date": "2017-05-14", "linenum": 1, },
  { "date": "2017-05-15", "linenum": 1, },
  { "date": "2017-05-16", "linenum": 1, },
  { "date": "2017-05-17", "linenum": 1, },
  { "date": "2017-05-18", "linenum": 1, },
  { "date": "2017-05-19", "linenum": 1, },
  { "date": "2017-05-20", "linenum": 1, },
  { "date": "2017-05-21", "linenum": 1, },
  { "date": "2017-05-22", "linenum": 1, },
  { "date": "2017-05-23", "linenum": 1, },
  { "date": "2017-05-24", "linenum": 1, },
  { "date": "2017-05-25", "linenum": 1, },
  { "date": "2017-05-26", "linenum": 1, },
  { "date": "2017-05-27", "linenum": 1, },
  { "date": "2017-05-28", "linenum": 1, },
  { "date": "2017-05-29", "linenum": 1, },
  { "date": "2017-05-30", "linenum": 1, },
  { "date": "2017-05-31", "linenum": 1, },
  { "date": "2017-06-01", "linenum": 1, },
  { "date": "2017-06-02", "linenum": 1, },
  { "date": "2017-06-03", "linenum": 1, },
  { "date": "2017-06-04", "linenum": 1, },
  { "date": "2017-06-05", "linenum": 1, },
  { "date": "2017-06-06", "linenum": 1, },
  { "date": "2017-06-07", "linenum": 1, },
  { "date": "2017-06-08", "linenum": 1, },
  { "date": "2017-06-09", "linenum": 1, },
  { "date": "2017-06-10", "linenum": 1, },
  { "date": "2017-06-11", "linenum": 1, },
  { "date": "2017-06-12", "linenum": 1, },
  { "date": "2017-06-13", "linenum": 1, },
  { "date": "2017-06-14", "linenum": 1, },
  { "date": "2017-06-15", "linenum": 1, },
  { "date": "2017-06-16", "linenum": 1, },
  { "date": "2017-06-17", "linenum": 1, },
  { "date": "2017-06-18", "linenum": 1, },
  { "date": "2017-06-19", "linenum": 1, },
  { "date": "2017-06-20", "linenum": 1, },
  { "date": "2017-06-21", "linenum": 2, },
  { "date": "2017-06-22", "linenum": 6, },
  { "date": "2017-06-23", "linenum": 9, },
  { "date": "2017-06-24", "linenum": 3, },
  { "date": "2017-06-25", "linenum": 3, },
  { "date": "2017-06-26", "linenum": 1, },
  { "date": "2017-06-27", "linenum": 7, },
  { "date": "2017-06-28", "linenum": 7, },
  { "date": "2017-06-29", "linenum": 12,},
  { "date": "2017-06-30", "linenum": 9, },
  { "date": "2017-07-01", "linenum": 4, },
  { "date": "2017-07-02", "linenum": 1, },
  { "date": "2017-07-03", "linenum": 2, },
  { "date": "2017-07-04", "linenum": 7, },
  { "date": "2017-07-05", "linenum": 6, },
  { "date": "2017-07-06", "linenum": 1, },
  { "date": "2017-07-07", "linenum": 6, },
  { "date": "2017-07-08", "linenum": 1, },
  { "date": "2017-07-09", "linenum": 1,  },
  { "date": "2017-07-10", "linenum": 1,  },
  { "date": "2017-07-11", "linenum": 8,  },
  { "date": "2017-07-12", "linenum": 5,  },
  { "date": "2017-07-13", "linenum": 7,  },
  { "date": "2017-07-14", "linenum": 4,  },
  { "date": "2017-07-15", "linenum": 4,  },
  { "date": "2017-07-16", "linenum": 2,  },
  { "date": "2017-07-17", "linenum": 1,  },
  { "date": "2017-07-18", "linenum": 10, },
  { "date": "2017-07-19", "linenum": 14, },
  { "date": "2017-07-20", "linenum": 6,  },
  { "date": "2017-07-21", "linenum": 1,  },
  { "date": "2017-07-22", "linenum": 6,  },
  { "date": "2017-07-23", "linenum": 1,  },
  { "date": "2017-07-24", "linenum": 1,  },
  { "date": "2017-07-25", "linenum": 1,  },
  { "date": "2017-07-26", "linenum": 1,  },
  { "date": "2017-07-27", "linenum": 9,  },
  { "date": "2017-07-28", "linenum": 1,  },
  { "date": "2017-07-29", "linenum": 15, },
  { "date": "2017-07-30", "linenum": 1,  },
  { "date": "2017-07-31", "linenum": 1,  },
  { "date": "2017-08-01", "linenum": 15, },
  { "date": "2017-08-02", "linenum": 11, },
  { "date": "2017-08-03", "linenum": 3,  },
  { "date": "2017-08-04", "linenum": 6,  },
  { "date": "2017-08-05", "linenum": 1,  },
  { "date": "2017-08-06", "linenum": 4,  },
  { "date": "2017-08-07", "linenum": 1,  },
  { "date": "2017-08-08", "linenum": 10, },
  { "date": "2017-08-09", "linenum": 11, },
  { "date": "2017-08-10", "linenum": 8,  },
  { "date": "2017-08-11", "linenum": 12, },
  { "date": "2017-08-12", "linenum": 8,  },
  { "date": "2017-08-13", "linenum": 2,  },
  { "date": "2017-08-14", "linenum": 1,  },
  { "date": "2017-08-15", "linenum": 18, },
  { "date": "2017-08-16", "linenum": 21, },
  { "date": "2017-08-17", "linenum": 7,  },
  { "date": "2017-08-18", "linenum": 10, },
  { "date": "2017-08-19", "linenum": 8,  },
  { "date": "2017-08-20", "linenum": 1,  },
  { "date": "2017-08-21", "linenum": 1,  },
  { "date": "2017-08-22", "linenum": 1,  },
  { "date": "2017-08-23", "linenum": 7,  },
  { "date": "2017-08-24", "linenum": 11, },
  { "date": "2017-08-25", "linenum": 3,  },
  { "date": "2017-08-26", "linenum": 3,  },
  { "date": "2017-08-27", "linenum": 1,  },
  { "date": "2017-08-28", "linenum": 2,  },
  { "date": "2017-08-29", "linenum": 7,  },
  { "date": "2017-08-30", "linenum": 20, },
  { "date": "2017-08-31", "linenum": 15, },
  { "date": "2017-09-01", "linenum": 1,  },
  { "date": "2017-09-02", "linenum": 4,  },
  { "date": "2017-09-03", "linenum": 1,  },
  { "date": "2017-09-04", "linenum": 1,  },
  { "date": "2017-09-05", "linenum": 8,  },
  { "date": "2017-09-06", "linenum": 6,  },
  { "date": "2017-09-07", "linenum": 5,  },
  { "date": "2017-09-08", "linenum": 1,  },
  { "date": "2017-09-09", "linenum": 25  },
  { "date": "2017-09-10", "linenum": 1,  },
  { "date": "2017-09-11", "linenum": 1,  },
  { "date": "2017-09-12", "linenum": 1,  },
  { "date": "2017-09-13", "linenum": 9,  },
  { "date": "2017-09-14", "linenum": 1,  },
  { "date": "2017-09-15", "linenum": 1,  },
  { "date": "2017-09-16", "linenum": 4,  },
  { "date": "2017-09-17", "linenum": 1,  },
  { "date": "2017-09-18", "linenum": 1,  },
  { "date": "2017-09-19", "linenum": 4,  },
  { "date": "2017-09-20", "linenum": 8,  },
  { "date": "2017-09-21", "linenum": 10  },
  { "date": "2017-09-22", "linenum": 9,  },
  { "date": "2017-09-23", "linenum": 5,  },
  { "date": "2017-09-24", "linenum": 1,  },
  { "date": "2017-09-25", "linenum": 1,  },
  { "date": "2017-09-26", "linenum": 1,  },
  { "date": "2017-09-27", "linenum": 7,  },
  { "date": "2017-09-28", "linenum": 13, },
  { "date": "2017-09-29", "linenum": 1,  },
  { "date": "2017-09-30", "linenum": 7,  },
  { "date": "2017-10-01", "linenum": 1,  },
  { "date": "2017-10-02", "linenum": 1,  },
  { "date": "2017-10-03", "linenum": 7,  },
  { "date": "2017-10-04", "linenum": 2,  },
  { "date": "2017-10-05", "linenum": 14, },
  { "date": "2017-10-06", "linenum": 9,  },
  { "date": "2017-10-07", "linenum": 12, },
  { "date": "2017-10-08", "linenum": 1,  },
  { "date": "2017-10-09", "linenum": 1,  },
  { "date": "2017-10-10", "linenum": 13, },
  { "date": "2017-10-11", "linenum": 12, },
  { "date": "2017-10-12", "linenum": 1,  },
  { "date": "2017-10-13", "linenum": 1,  },
  { "date": "2017-10-14", "linenum": 1,  },
  { "date": "2017-10-15", "linenum": 1,  },
  { "date": "2017-10-16", "linenum": 1,  },
  { "date": "2017-10-17", "linenum": 1,  },
  { "date": "2017-10-18", "linenum": 1,  },
  { "date": "2017-10-19", "linenum": 1,  },
  { "date": "2017-10-20", "linenum": 1,  },
  { "date": "2017-10-21", "linenum": 1,  },
  { "date": "2017-10-22", "linenum": 1,  },
  { "date": "2017-10-23", "linenum": 1,  },
  { "date": "2017-10-24", "linenum": 10, },
  { "date": "2017-10-25", "linenum": 4,  },
  { "date": "2017-10-26", "linenum": 7,  },
  { "date": "2017-10-27", "linenum": 3,  },
  { "date": "2017-10-28", "linenum": 14, },
  { "date": "2017-10-29", "linenum": 1,  },
  { "date": "2017-10-30", "linenum": 1,  },
  { "date": "2017-10-31", "linenum": 5,  }
]

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