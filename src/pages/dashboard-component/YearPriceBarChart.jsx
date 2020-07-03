import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart, Interval, Tooltip, Coordinate } from 'bizcharts'

const YearPriceBarChart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const res = [
                {
                    country: "北京",
                    population: 131744
                },
                {
                    country: "上海",
                    population: 104970
                },
                {
                    country: "广州",
                    population: 29034
                },
                {
                    country: "深圳",
                    population: 23489
                },
                {
                    country: "厦门",
                    population: 18203
                }
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
                <Coordinate transpose />
                <Interval position="country*population" />
                <Tooltip showMarkers={false} />
            </Chart>
        </div>
    )
}

export default YearPriceBarChart