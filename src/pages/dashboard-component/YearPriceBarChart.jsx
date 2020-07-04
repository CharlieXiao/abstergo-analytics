import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart, Interval, Tooltip, Coordinate } from 'bizcharts'
import { Card } from 'antd'

const YearPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const res =  [
                {city: "北京",price: 131744},
                {city: "上海",price: 104970},
                {city: "广州",price: 29034},
                {city: "深圳",price: 23489},
                {city: "厦门",price: 18203}
            ];
            const ds = new DataSet();
            const dv = ds.createView().source(res);
            dv.source(res).transform({
                type: "sort",
                callback(a, b) {
                    // 排序依据，和原生js的排序callback一致
                    return a.price - b.price;
                }
            });
            setData(dv.rows)
        }, 1000)
    }, [])

    return (
        <Card title="全年各市航班价格平均值">
            <Chart height={300} data={data} autoFit>
                {/* 设置成条形图 */}
                <Coordinate transpose />
                <Interval position="city*price" />
                <Tooltip showMarkers={false} />
            </Chart>
        </Card>
    )
}

export default YearPriceBarChart