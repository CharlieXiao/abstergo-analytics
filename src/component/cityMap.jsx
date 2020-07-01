import React, { Component } from 'react';
import echarts from 'echarts';
// import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { cityCord, cityArray } from '../city';

const convertData = (data) => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = cityCord[data[i].city];
        if (geoCoord) {
            res.push({
                name: data[i].city,
                value: [geoCoord.log, geoCoord.lat, data[i].code],
                type: 'node'
            });
        }
    }
    console.log(res)
    return res;
};

const route = []

const NodeSeries = {
    name: '出发城市',
    type: 'graph',
    cursor: 'pointer',
    coordinateSystem: 'geo',
    layout: 'none',
    data: convertData(cityArray),
    links: route,
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
        NodeSeries
    ]

}

class Map extends Component {
    componentDidMount() {
        this.initalECharts();
    }

    componentWillUpdate() {
        if (this.myChart) {
            console.log("render?")
            this.myChart.resize('auto', 'auto')
        }
    }

    initalECharts() {
        echarts.registerMap('china', geoJson);
        this.myChart = echarts.init(document.getElementById('mainMap'));
        this.myChart.setOption(option)
        // 响应点击事件
        this.myChart.on('click', (params) => {
            if (params.data.type === 'node') {
                // 显示航线信息
                const currCity = params.data.name
                const line = []
                for (let i = 0; i < cityArray.length; i++) {
                    if (cityArray[i].city !== currCity) {
                        line.push({ source: currCity, target: cityArray[i].city, value: cityArray[i].code })
                    }
                }
                // {series:{links:line}}
                this.myChart.setOption({ series: { links: line } })
            }
        })
    }

    render() {
        return (
            <div id="mainMap" style={{ width: '70vw', height: '70vh' }} ></div>
        );
    }
}

export default Map;
