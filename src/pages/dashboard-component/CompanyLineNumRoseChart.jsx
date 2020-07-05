import React, { useState, useEffect } from 'react';
import {
    Chart,
    Interval,
    Tooltip,
    Axis,
    Coordinate,
    Legend
} from 'bizcharts';
import { Card } from 'antd'
import {host} from '../../config'
import axios from 'axios'

const CompanyLineNumRoseChart = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(host+'/dashboard/getCompanyFlightCount')
        axios.get(host+'/dashboard/getCompanyFlightCount').then((res)=>{
            if(res.data.success){
                console.log(res.data.data)
                setData(res.data.data)
            }else{
                alert(res.data.msg)
            }
        }).catch((e)=>{
            console.log(e)
            alert(e)
        })
        // setTimeout(() => {
        //     const res = [
        //         { company: '南方航空', lines: 11001 },
        //         { company: '中国国际航空', lines: 7822 },
        //         { company: '海南航空', lines: 6300 },
        //         { company: '深圳航空', lines: 4322 },
        //         { company: '东方航空', lines: 2132 },
        //         { company: '西部航空', lines: 1230 },
        //         { company: "成都航空", lines: 500},
        //     ];
        //     setData(res)
        // }, 1000)
    }, [])

    return (
        <Card title="全年各航空公司航班数">
            <Chart height={300} data={data} autoFit>
                <Coordinate
                    type="polar"
                    // startAngle={Math.PI} // 起始角度
                    // endAngle={Math.PI * (3 / 2)} // 结束角度
                />
                <Axis name="company" grid={{
                    line: {
                        type: 'circle',
                    },
                    closed: false,
                }} />
                <Axis name="airlinesCount" label={null} />
                <Tooltip showTitle={false} />
                <Legend visible={false}/>
                <Interval
                    position="company*airlinesCount"
                    adjust="stack"
                    color={['company', 'rgb(252,143,72)-rgb(255,215,135)']}
                    element-highlight
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    label={['lines', {
                        offset: -15,
                        style: {
                            textAlign: 'center',
                            fill: '#000',
                        },
                    }]}
                />
            </Chart>
        </Card>
    );
}

export default CompanyLineNumRoseChart