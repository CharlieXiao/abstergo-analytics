import React, { Component, useRef, useEffect, useState } from 'react';
import echarts from 'echarts';
// import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { cityCord, cityArray } from '../city';

echarts.registerMap("china", geoJson)

const option = {
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        containLabel: true
    },
    geo: {
        map: 'china',
        roam: false,
        zoom: 1.2,
        silent: true,
        itemStyle: {
            areaColor: 'rgba(255,255,255,0.8)',
            borderColor: '#666'
        }
    },
    series: [
        {
            name: '出发城市',
            type: 'graph',
            cursor: 'pointer',
            coordinateSystem: 'geo',
            layout: 'none',
            data: [],
            links: [],
            roam: false,
            focusNodeAdjacency: false,
            // 节点样式
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                }
            },
            hoverAnimation: true,
            // 不显示label
            label: {
                show: false
            },
            // 线样式
            lineStyle: {
                color: 'source',
                curveness: 0.1
            },
            // hover时的样式
            emphasis: {
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    show: false
                },
                lineStyle: {
                    width: 2
                }
            },
            tooltip: {
                // formatter:'{a}: {b}<br/>{c}'
                formatter: (params, ticket, callback) => {
                    // node
                    if (params.data.type === 'node') {
                        return `${params.data.name}<br/>总航班数：${params.value[2]}`
                    } else {
                        // link
                        return `${params.data.source} -> ${params.data.target}<br/>航班数：${params.data.value}`
                    }
                }
            }
        }
    ]

}

const Map = () => {
    const mapContainer = useRef(null)
    const [data, setData] = useState([])
    let chart = null
    useEffect(() => {
        //请求
        setTimeout(() => {
            const response = {
                "北京": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "深圳": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "厦门": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "重庆": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "天津": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "上海": { total: 12345, lines: [{ city: "上海", lines: 1234 }, { city: "广州", lines: 2345 }] },
                "广州": { total: 12345, lines: [{ city: "北京", lines: 1234 }, { city: "深圳", lines: 2345 }] }
            }
            setData(response)
        }, 1000)
        return () => {
            console.log("dispose chart")
            if (chart) {
                chart.dispose()
            }
        }
    }, [])

    useEffect(() => {
        // 保证chart对象有效
        console.log("get data")
        initChart()
        chart.setOption({ series: { name: "出发城市", data: convertData(data) } })
        chart.on('click', (params) => {
            if (data.length !== 0 && params.data.type === 'node') {
                // 显示航线信息
                const currCity = params.data.name
                // console.log(data[currCity].lines)
                const line = []
                const lineData = data[currCity].lines
                // console.log(lineData.link)
                lineData.forEach((element) => {
                    line.push({ source: currCity, target: element.city, value: element.lines })
                })
                console.log(line)
                chart.setOption({ series: { name: "出发城市", links: line } })
            }
        })
    }, [data])

    const initChart = () => {
        const chartInstance = echarts.getInstanceByDom(mapContainer.current)
        if (chartInstance) {
            chart = chartInstance
        } else {
            chart = echarts.init(mapContainer.current)
            chart.setOption(option)
        }
    }

    const convertData = (data) => {
        let res = [];
        for (let key in data) {
            let geoCoord = cityCord[key];
            if (geoCoord) {
                res.push({
                    name: key,
                    value: [geoCoord.log, geoCoord.lat, data[key].total],
                    type: 'node'
                });
            }
        }
        return res;
    };

    return <div ref={mapContainer} style={{ width: '70vw', height: '70vh' }} />
}

export default Map;
