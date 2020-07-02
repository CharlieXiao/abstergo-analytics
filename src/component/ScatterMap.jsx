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
                value: [geoCoord.log, geoCoord.lat, Math.floor(Math.random()*20)+1],
                type: 'node'
            });
        }
    }
    console.log(res)
    return res;
};

const route = []

const NodeSeries = {
    name: '航班起降数',
    type: 'scatter',
    coordinateSystem: 'geo',
    data:convertData(cityArray),
    cursor:'pointer',
    symbolSize:(value,params)=>{
        // 保证最小大小为5
        return 5+value[2]
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
    visualMap:{
        type:'continuous',
        calculable:false,
        min:1,
        max:20,
    },
    geo: {
        map: 'china',
        roam:true,
        scaleLimit:{
            // 最小缩放值
            min:1,
            // 最大缩放倍数
            max:10
        },
        zoom: 1.2,
        silent: true,
        itemStyle: {
            areaColor: '#fff',
            borderColor: '#666'
        }
    },
    series: [
        NodeSeries
    ]

}

class ScatterMap extends Component {
    componentDidMount() {
        this.initalECharts();
    }

    componentWillUpdate() {
        if (this.myChart) {
            this.myChart.resize('auto', 'auto')
        }
    }

    initalECharts() {
        echarts.registerMap('china', geoJson);
        this.myChart = echarts.init(document.getElementById('mainMap'));
        this.myChart.setOption(option)
    }

    render() {
        return (
            <div id="mainMap" style={{ width: '70vw', height: '70vh',margin:'auto' }} ></div>
        );
    }
}

export default ScatterMap;
