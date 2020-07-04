import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart, Interval, Tooltip, Axis } from 'bizcharts'
import { Card } from 'antd'

const CompanyPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const res = [
                {company: "南方航空",price: 131744},
                {company: "中国国际航空",price: 104970},
                {company: "海南航空",price: 29034},
                {company: "深圳航空",price: 23489},
                {company: "东方航空",price: 46554},
                {company: "西部航空",price: 12312},
                {company: "厦门航空",price: 79845},
                {company: "成都航空",price: 1322},
                {company: "首都航空",price: 78945},
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
    },[])

    return (
        <Card title="全年各航空公司航班平均价格">
            <Chart height={400} data={data} autoFit>
                {/* 设置成条形图 */}
                {/* <Coordinate transpose /> */}
                <Interval position="company*price" />
                <Tooltip showMarkers={false} />
            </Chart>
        </Card>
    )
}

export default CompanyPriceBarChart