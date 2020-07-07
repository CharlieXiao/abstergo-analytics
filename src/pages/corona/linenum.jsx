import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Card } from 'antd'
import echarts from 'echarts';
// import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { cityCord, cityArray } from '../../city';
import locale from "antd/es/date-picker/locale/zh_CN";
import { host } from '../../config'
import axios from 'axios'

echarts.registerMap('china', geoJson)

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '新冠疫情专题',
        menu: [{
            path: '/corona/price',
            title: '机票价格变化'
        }]
    },
    {
        breadcrumbName: '航班数量变化',
    },
];

const convertData = (data) => {
    var res = [];
    data.forEach((element) => {
        var geoCoord = cityCord[element.name];
        if (geoCoord) {
            res.push({
                name: element.name,
                value: [geoCoord.log, geoCoord.lat, element.linenum],
                type: 'node',
                size: element.size
            });
        }
    })
    return res;
};

const option = {
    baseOption: {
        timeline: {
            // 时间轴类型time
            axisType: 'category',
            // realtime: false,
            loop: true,
            autoPlay: false,
            // 时间轴自动播放时间间隔
            playInterval: 1000,
            symbolSize: 12,
            left: '15%',
            right: '15%',
            bottom: '0%',
            width: '70%',
            // 控制样式（播放按钮）
            controlStyle: {
                show: false
            },
            lineStyle: {
                show: true,
                color: "#c23531",
                width: 2,
                type: "solid",
            },
            // 设置不显示
            itemStyle: {
                opacity: 0
            },
            emphasis: {
                // hover效果
                itemStyle: {
                    borderWidth: 5,
                    color: '#c23531',
                    borderColor: 'rgba(194,53,49, 0.5)'
                }
            },
            data: [],
            tooltip: {
                show: false
            },
        },
        tooltip: {
            show: true
        },
        visualMap: {
            type: 'piecewise',
            pieces: [{
                min: 1002,
                color: '#b71c1c'
            },
            {
                min: 501,
                max: 1001,
                color: '#d32f2f'
            },
            {
                min: 251,
                max: 500,
                color: '#e53935'
            },
            {
                min: 101,
                max: 250,
                color: '#e57373'
            },
            {
                min: 11,
                max: 100,
                color: '#ef9a9a'
            },
            {
                min: 1,
                max: 10,
                color: '#ffcdd2'
            },
            {
                value: 0,
                color: '#ffebee'
            }
            ],
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            // 对应的seris
            seriesIndex: [0],

            textStyle: {
                color: '#333'
            },
            // bottom: '10%',
            // left: "0%",
        },
        // grid组件，用于绘制条形图
        grid: {
            right: '0%',
            top: '0%',
            bottom: '10%',
            width: '20%'
        },
        xAxis: {
            min: 0,
            max: 4000,
            show: false
        },
        yAxis: [{
            inverse: true,
            offset: '2',
            'type': 'category',
            data: '',
            nameTextStyle: {
                color: '#fff'
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                //rotate:45,
                textStyle: {
                    fontSize: 14,
                    color: '#000000',
                },
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333'
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#333'
                }
            },
        }],
        geo: {
            map: 'china',
            right: '35%',
            left: '5%',
            top: '0%',
            bottom: '10%',
            silent: true
        },
        series: [
            {
                name: 'mapSer',
                type: 'map',
                map: 'china',
                roam: false,
                geoIndex: 0,
                label: {
                    show: false,
                },
            },
            {
                'name': '',
                'type': 'bar',
                zlevel: 2,
                barWidth: '40%',
                label: {
                    normal: {
                        show: true,
                        fontSize: 14,
                        position: 'right',
                        formatter: '{c}'
                    }
                },
            }
        ],

    },
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut',
    options: []
};

const ScatterMap = ({ mapData }) => {
    const mapContainer = useRef(null)
    let chart = null

    useEffect(() => {
        console.log("data change")
        renderChart()
    }, [mapData])

    useEffect(() => {
        return () => {
            console.log("dipose chart")
            if (chart) {
                chart.dispose()
            }
        }
    }, [])

    useEffect(() => {
        const chartInstance = echarts.getInstanceByDom(mapContainer.current)
        if (chartInstance) {
            chartInstance.resize("auto", "auto")
        }
    })

    const renderChart = () => {
        const chartInstance = echarts.getInstanceByDom(mapContainer.current)
        if (chartInstance) {
            chart = chartInstance
        } else {
            chart = echarts.init(mapContainer.current)
            chart.setOption(option)
        }
        let days = []
        let seriesOptions = []
        console.log("render map")
        if (mapData === null) {
            return
        }
        const provinceAffectData = mapData.provinceAffectData;
        const cityLineNum = mapData.cityLineNumData;
        for (let n = 0; n < provinceAffectData.length; n++) {
            // 生成days数组
            const day = provinceAffectData[n]
            const dayText = day[0].dateId
            days.push(dayText)
            let res = [];
            let res1 = [];
            let res2 = [];
            for (let j = 0; j < day.length; j++) {
                res.push({
                    name: day[j].province,
                    value: day[j].confirmedCount
                })
            }
            res.sort(function (a, b) {
                return b.value - a.value;
            });
            for (let t = 0; t < 10; t++) {
                res1[t] = res[t].name;
                res2[t] = res[t].value;
            }
            seriesOptions.push({
                yAxis: {
                    data: res1,
                },
                series: [
                    {
                        type: 'map',
                        data: res
                    }, {
                        type: 'bar',
                        data: res2,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [{
                                        colorStops: [{
                                            offset: 0,
                                            color: '#FF0000' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#990000' // 100% 处的颜色
                                        }]
                                    },
                                    {
                                        colorStops: [{
                                            offset: 0,
                                            color: '#00C0FA' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#2F95FA' // 100% 处的颜色
                                        }]
                                    }
                                    ];
                                    if (params.dataIndex < 3) {
                                        return colorList[0]
                                    } else {
                                        return colorList[1]
                                    }
                                },
                            }
                        },
                    },
                    {
                        name: '航班起降数',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(cityLineNum[n]),
                        symbol: 'pin',
                        symbolSize: (value, params) => {
                            // 保证最小大小为5
                            return params.data.size;
                        },
                        itemStyle: {
                            color: 'rgba(128,0,0,1)',
                            borderColor: "#fff",
                            // borderWidth:2
                        },
                        tooltip: {
                            formatter: (params) => {
                                return `${params.data.name} <br/> 航班数量: ${params.value[2]}`
                            }
                        }
                    }
                ]
            });
        }
        console.log(days)
        console.log(seriesOptions)
        chart.setOption({ baseOption: { timeline: { data: days } }, options: seriesOptions })
    }

    return <div ref={mapContainer} style={{ height: "70vh", width: "70vw", margin: "auto" }} />
}

const CoronaLineNumber = () => {
    const [mapData, setMapData] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [chartName, setChartName] = useState("")
    useEffect(() => {
        setLoading(true)
        console.log("get data")
        axios.get(host + "/corona/linenum").then((res) => {
            console.log(res)
            if (res.data.success) {
                console.log(res.data.data)
                setMapData(res.data.data)
            } else {
                alert(res.data.msg)
            }
            setLoading(false)
        }).catch((e) => {
            setLoading(false)
            console.log(e)
            alert(e)
        })
    }, [])

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航班数量变化" routes={routes} />
            <div className="ab-container">
                <Card title="各市航班数量随感染人数变化情况">
                    <Skeleton loading={loading} active>
                        {/* <div className="ab-chart-title">{chartName}</div> */}
                        <ScatterMap mapData={mapData} />
                    </Skeleton>
                </Card>
            </div>
        </div>
    );
}

export default CoronaLineNumber;

