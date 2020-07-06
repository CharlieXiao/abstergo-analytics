import React, { Component, useRef, useEffect, useState } from 'react';
import echarts from 'echarts';
// import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { cityCord, cityMap } from '../city';

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
            // areaColor: 'rgba(255,255,255,0.8)',
            // borderColor: '#666',
            areaColor: 'rgba(60,72,72,0.8)',
            borderColor: 'rgb(15,156,144)',
            shadowColor:'rgba(0,0,0,0.7)',
            shadowBlur:20
            // areaColor: '#3a7fd5',
            // borderColor: '#0a53e9',//线
            // shadowColor: '#092f8f',//外发光
            // shadowBlur: 20
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
                    borderColor: 'rgb(15,156,144)',
                    color: 'rgba(15,156,144,0.6)',
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
                // color: 'source',
                curveness: 0.15,
                width:2,
                color:'rgb(255,251,229)'
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
                        return `${params.data.name}<br/>总起降数：${params.value[2]}`
                    } else {
                        // link
                        return `${params.data.source} ➡ ${params.data.target}<br/>过往航班数：${params.data.value}`
                    }
                }
            }
        }
    ]

}

const Map = () => {
    const mapContainer = useRef(null)
    // const [data, setData] = useState([])
    let chart = null
    useEffect(() => {
        console.log("get data")
        initChart()
        chart.setOption({ series: { name: "出发城市", data: convertData(cityMap) } })
        chart.on('click', (params) => {
            if (params.data.type === 'node') {
                // 显示航线信息
                const currCity = params.data.name
                // console.log(data[currCity].lines)
                const line = []
                const lineData = cityMap[currCity].lines
                // console.log(lineData.link)
                lineData.forEach((element) => {
                    line.push({ source: currCity, target: element.city, value: element.lines })
                })
                console.log(line)
                chart.setOption({ series: { name: "出发城市", links: line } })
            }
        })
        return () => {
            console.log("dispose chart")
            if (chart) {
                chart.dispose()
            }
        }
    }, [])

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
