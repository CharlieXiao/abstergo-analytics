import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, DatePicker, Card } from 'antd'
import echarts from 'echarts';
import geoJson from 'echarts/map/json/china.json';
import { cityCord } from '../../city';
import locale from "antd/es/date-picker/locale/zh_CN";
import moment from 'moment';
import axios from 'axios'
import host from '../../config'

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
                size: Math.floor( (element.sum_dep_arr - min) / (max - min) * 20 ) + 10
            });
        }
    })
    return res;
};

const dataTemplate = [
    { city: '北京', linenum: 36, },
    { city: '长春', linenum: 36, },
    { city: '重庆', linenum: 36, },
    { city: '长沙', linenum: 36, },
    { city: '成都', linenum: 36, },
    { city: '大连', linenum: 36,  },
    { city: '福州', linenum: 36,  },
    { city: '广州', linenum: 36,  },
    { city: '贵阳', linenum: 36,  },
    { city: '桂林', linenum: 36,  },
    { city: '海口', linenum: 36,  },
    { city: '合肥', linenum: 36,  },
    { city: '杭州', linenum: 36,  },
    { city: '济南', linenum: 36,  },
    { city: '昆明', linenum: 16,  },
    { city: '兰州', linenum: 16,  },
    { city: '拉萨', linenum: 16,  },
    { city: '南昌', linenum: 16,  },
    { city: '南京', linenum: 16,  },
    { city: '南宁', linenum: 16,  },
    { city: '泉州', linenum: 16,  },
    { city: '青岛', linenum: 16, },
    { city: '上海', linenum: 16, },
    { city: '沈阳', linenum: 16, },
    { city: '三亚', linenum: 6, },
    { city: '深圳', linenum: 6, },
    { city: '天津', linenum: 6,  },
    { city: '太原', linenum: 6,  },
    { city: '温州', linenum: 6,  },
    { city: '武汉', linenum: 6,  },
    { city: '无锡', linenum: 6,  },
    { city: '西安', linenum: 6,  },
    { city: '厦门', linenum: 6,  },
    { city: '西宁', linenum: 6,  },
    { city: '银川', linenum: 6,  },
    { city: '扬州', linenum: 6,  },
    { city: '郑州', linenum: 6,  },
    { city: '珠海', linenum: 6,  },
    { city: '石家庄', linenum: 46,  },
    { city: '哈尔滨', linenum: 46,  },
    { city: '呼和浩特', linenum: 46,  },
    { city: '乌鲁木齐', linenum: 46,  },
]

const option = {
    tooltip: {
        // hover item时出现tooltip
        trigger: 'item'
    },
    visualMap: {
        type: 'continuous',
        calculable: false,
        min: 1,
        max: 1000,
    },
    geo: {
        map: 'china',
        roam: false,
        // scaleLimit: {
        //     // 最小缩放值
        //     min: 1,
        //     // 最大缩放倍数
        //     max: 10
        // },
        zoom: 1.2,
        silent: true,
        itemStyle: {
            areaColor: '#fff',
            borderColor: '#666'
        }
    },
    series: [{
        name: '航班起降数',
        type: 'scatter',
        coordinateSystem: 'geo',
        // dimensions: ['city','linenum','size'],
        data: [],
        cursor: 'pointer',
        symbolSize: (value, params) => {
            // 保证最小大小为5
            return params.data.size
        },
        tooltip: {
            formatter: (params) => {
                return `${params.name}<br/>航班数：${params.data.value[2]}`
            }
        }
    }]

}

const ScatterMap = ({data})=>{
    const mapContainer = useRef(null)
    let myChart = null
    // 当数据发生变化时触发重新绘制
    useEffect(()=>{
        renderChart(data)
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
        myChart.setOption({series:[{name: '航班起降数', data:convertData(data)}]})
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
        axios.get(host+"/city/getCityLineNum",{params:{
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

