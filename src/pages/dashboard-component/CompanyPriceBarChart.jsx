import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart, Interval, Tooltip, Axis } from 'bizcharts'

const CompanyPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const res = [
                {
                    country: "南方航空",
                    population: 131744
                },
                {
                    country: "中国国际航空",
                    population: 104970
                },
                {
                    country: "海南航空",
                    population: 29034
                },
                {
                    country: "深圳航空",
                    population: 23489
                },
                {
                    country: "东方航空",
                    population: 46554
                },{
                    country: "西部航空",
                    population: 12312
                },{
                    country: "厦门航空",
                    population: 79845
                },{
                    country: "成都航空",
                    population: 1322
                },{
                    country: "首都航空",
                    population: 78945
                },
            ];
            const ds = new DataSet();
            const dv = ds.createView().source(res);
            dv.source(res).transform({
                type: "sort",
                callback(a, b) {
                    // 排序依据，和原生js的排序callback一致
                    return a.population - b.population;
                }
            });
            setData(dv.rows)
        }, 1000)
    },[])

    return (
        <div className="ab-chart-container">
            {/* <div className="ab-chart-title">全年各市航班价格平均值</div> */}
            <Chart height={400} data={data} autoFit>
                {/* 设置成条形图 */}
                {/* <Coordinate transpose /> */}
                <Interval position="country*population" />
                <Tooltip showMarkers={false} />
            </Chart>
        </div>
    )
}

export default CompanyPriceBarChart