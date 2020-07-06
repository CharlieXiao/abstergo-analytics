import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import axios from 'axios'
import { host } from '../../config'
import { Card, Switch } from 'antd';
import { Scatter } from '@ant-design/charts'
const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '最低机票价格'
        }, {
            path: '/city/avgprice',
            title: '平均机票价格'
        }, {
            path: '/city/linenum',
            title: '各市航班数量'
        }]
    },
    {
        breadcrumbName: '最低价格时间段分布',
    },
];

const TimePrice = () => {
    const [data, setData] = useState(null);
    const [chartData,setChartData] = useState([]);
    // const [dir,setDir] = useState(true);   // true is 'dep' , false is 'arr'
    useEffect(()=>{
        const response = {
            arr:[
                {city:'北京',clock:'01.23',price:809},
                {city:'上海',clock:'03.24',price:345},
                {city:'广州',clock:'05.24',price:234},
                {city:'深圳',clock:'07.24',price:453},
                {city:'厦门',clock:'09.24',price:1231},
                {city:'重庆',clock:'11.24',price:321},
                {city:'天津',clock:'13.24',price:468}
            ],
            dep:[
                {city:'北京',clock:'01.25',price:123},
                {city:'上海',clock:'03.25',price:456},
                {city:'广州',clock:'05.25',price:789},
                {city:'深圳',clock:'07.25',price:910},
                {city:'厦门',clock:'09.25',price:1234},
                {city:'重庆',clock:'11.25',price:2134},
                {city:'天津',clock:'13.25',price:678}
            ]
        }
        setData(response)
        setChartData(response.dep)
    },[])

    const asyncFetch = () => {
        axios.get('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const onSwitchChange = (checked,event)=>{
        // 修改数据
        console.log(checked)
        setChartData(checked?data.dep:data.arr)
    }

    const config = {
        // 设置字段显示格式
        meta:{
            city:{
                alias:'城市'
            },
            clock:{
                alias:'起飞时间',
                formatter:(v)=>{return `${String(v).split('.').join(':')}`}
            },
            price:{
                alias:'价格',
                formatter:(v)=>{return `￥${v}`}
            }
        },
        xField: 'clock',
        yField: 'price',
        colorField:'city',
        xAxis:{
            tickCount:24,
            min:0,
            max:24
        },
        label:{
            visible:true,
            formater:(text)=>{
                console.log(text)
                return `北京: ${text}`
            }
        },
        tooltip:{
            fields:['city','clock','price']
        }
    };

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="最低价格时间段分布" routes={routes} />
            <div className="ab-container">
                <Card title="价格分布散点图" extra={
                    <Switch checkedChildren="dep" unCheckedChildren="arr"  defaultChecked onChange={onSwitchChange} />
                }>
                    <Scatter {...config} data={chartData} label={{}}/>
                </Card>
            </div>
        </div>
    )
}

export default TimePrice;