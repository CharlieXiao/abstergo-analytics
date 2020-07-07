import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, DatePicker, Card } from 'antd'
import echarts from 'echarts';
import geoJson from 'echarts/map/json/china.json';
import { cityCord } from '../../city';
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from 'moment';
import axios from 'axios'
import {host} from '../../config'

echarts.registerMap('china', geoJson);

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
            path: '/city/timeprice',
            title: '最低价格时间段分布'
        }]
    },
    {
        breadcrumbName: '各市航班数量',
    },
];

const convertData = (data) => {
    let res = [];
    let min = 0x7f7f7f7f;
    let max = 0;
    data.forEach((element)=>{
        if(element.sum_dep_arr > max){
            max = element.sum_dep_arr
        }
        if(element.sum_dep_arr < min){
            min = element.sum_dep_arr
        }
    })
    data.forEach((element) => {
        let geoCoord = cityCord[element.city];
        if (geoCoord) {
            res.push({
                name: element.city,
                value: [geoCoord.log, geoCoord.lat, element.sum_dep_arr],
                type: 'node',
                size: Math.floor( (element.sum_dep_arr - min) / (max - min) * 20 ) + 20
            });
        }
    })
    return res;
};

const option = {
    tooltip: {
        // hover item时出现tooltip
        trigger: 'item'
    },
    visualMap: {
        type: 'continuous',
        calculable: false,
        min: 1,
        max: 15000,
        // 只选取第一个series的数据
        seriesIndex:0
    },
    // 配置右侧条形图
    grid:{
        right:20,
        width:'20%'
    },
    xAxis:{
        type:'value',
        show:false
    },
    yAxis:{
        // 反转坐标轴
        inverse:true,
        type:'category',
        // label和坐标轴之间距离
        offset:2,
        // 坐标轴刻度
        axisTick: {
            show: false,
        },
        // 不显示坐标轴线
        axisLine:{
            show:false,
        },
        data:[]
        // data:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    geo: {
        map: 'china',
        roam: false,
        left:20,
        top:20,
        bottom:20,
        aspectScale:0.75,
        width:'70%',
        // scaleLimit: {
        //     // 最小缩放值
        //     min: 1,
        //     // 最大缩放倍数
        //     max: 10
        // },
        // zoom: 1.2,
        silent: true,
        itemStyle: {
            areaColor: '#fff',
            borderColor: '#fff',
            shadowColor:'rgba(0,0,0,0.2)',
            shadowBlur:10
            // areaColor: '#3a7fd5',
            // borderColor: '#0a53e9',//线
            // shadowColor: '#092f8f',//外发光
            // shadowBlur: 20
        }
    },
    series: [
    {
        name: '航班起降数',
        type: 'scatter',
        symbol:'pin',
        coordinateSystem: 'geo',
        // dimensions: ['city','linenum','size'],
        data: [],
        symbolSize: (value, params) => {
            // 保证最小大小为5
            return params.data.size
        },
        tooltip: {
            formatter: (params) => {
                return `${params.name}<br/>航班数：${params.data.value[2]}`
            },
        }
    },{
        type:'bar',
        name:'起降数排行',
        data: [],
        tooltip:{
            formatter: (params) => {
                return `${params.name}：${params.data}`
            },
        },
        label: {
            show: true,
            fontSize: 14,
            position: 'right',
            formatter: (params)=>{
                return `${params.data}`
            },
            color:'#000'
        },
        barWidth: '40%',
        // showBackground:true,
        itemStyle:{
            color:'rgba(24,144,255,0.6)',
            borderColor:'rgb(24,144,255)'
            // color:'#000'
        }
    }
    ]

}

const ScatterMap = ({data})=>{
    const mapContainer = useRef(null)
    let myChart = null
    // 当数据发生变化时触发重新绘制
    useEffect(()=>{
        if(data!==[]){
            renderChart(data)
        }
    },[data])

    useEffect(()=>{
        return ()=>{
            // 销毁对象
            if(myChart){
                myChart.dispose()
            }
        }
    },[])

    // 每次render时重新调整大小
    useEffect(()=>{
        const renderedInstance = echarts.getInstanceByDom(mapContainer.current)
        if(renderedInstance){
            renderedInstance.resize('auto','auto')
        }
    })

    const renderChart = (data)=>{
        const renderedInstance = echarts.getInstanceByDom(mapContainer.current)
        if (renderedInstance) {
            myChart = renderedInstance
        } else {
            myChart = echarts.init(mapContainer.current)
            myChart.setOption(option)
        }
        // 对data进行排序
        console.log(data)
        const barData = data.sort((a,b)=>{
            return b.sum_dep_arr - a.sum_dep_arr;
        }).slice(0,10)
        const cityName = []
        const cityValue = []
        barData.forEach((element)=>{
            cityName.push(element.city)
            cityValue.push(element.sum_dep_arr)
        })
        console.log(cityName)
        console.log(cityValue)
        myChart.setOption(
            {
                series:[
                    {name: '航班起降数', data:convertData(data)},
                    {name: "起降数排行",data:cityValue}
                ],
                yAxis:{
                    data:cityName
                }
            }
        )
    }
    
    return (
        <div ref={mapContainer} style={{ height: '70vh',width:'70vw', margin: 'auto' }} ></div>
    );
}

const CityLineNum = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [chartName, setChartName] = useState("")
    useEffect(() => {
        onDatePickerChange(new moment("201907", "YYYYMM"))
    }, [])

    const onDatePickerChange = (date) => {
        setLoading(true)
        setChartName(`${date.format("YYYY年M月")} 各城市航班数量`)
        axios.get(host+"/city/getCityFlightNum",{params:{
            month:date.format("YYYY-MM")
        }}).then((res)=>{
            if(res.data.success){
                setData(res.data.data)
                setLoading(false)
            }           
        }).catch((e)=>{
            setLoading(false)
            alert(e)
            // console.log(e)
        })
        // setTimeout(() => {
        //     dataTemplate.forEach((element) => {
        //         element.linenum = Math.floor(Math.random() * 1000) + 1
        //     })
        //     setData(dataTemplate)
        //     setLoading(false)
        // }, 1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="各市航班数量" routes={routes} />
            <div className="ab-container">
                <Card title={chartName} bordered={false}
                    extra={<DatePicker picker="month" locale={locale} onSelect={onDatePickerChange} defaultValue={new moment("201907", "YYYYMM")} allowClear={false} format="YYYY/M" />} >
                    <Skeleton loading={loading} active>
                        <ScatterMap data={data} />
                    </Skeleton>
                </Card>
            </div>
        </div>
    );
}

export default CityLineNum;

