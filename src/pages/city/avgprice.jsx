import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import PriceMonthForm from '../../component/PriceMonthForm';
import { Skeleton, Row, Col } from 'antd'
import { Chart, Coordinate, Interval,Interaction,Tooltip } from "bizcharts";
import DataSet from "@antv/data-set";

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '最低机票价格'
        }, {
            path: '/city/linenum',
            title: '航班数'
        }]
    },
    {
        breadcrumbName: '城市间平均价格',
    },
];

const CityAvgPrice = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        const res = [
            {
                country: "中国",
                population: 131744
            },
            {
                country: "印度",
                population: 104970
            },
            {
                country: "美国",
                population: 29034
            },
            {
                country: "印尼",
                population: 23489
            },
            {
                country: "巴西",
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
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="城市间平均价格" routes={routes} />
            <div className="ab-container">
                <PriceMonthForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <Row gutter={24}>
                            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                                <Chart height={500} data={data} autoFit>
                                    {/* 设置成条形图 */}
                                    <Coordinate transpose />
                                    <Interval position="country*population" />
                                    {/* hover高亮效果 */}
                                    <Interaction type="element-highlight" />
                                    <Interaction type="active-region" />
                                    <Tooltip showMarkers={false}/>
                                </Chart>
                            </Col>
                            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                                this is detail
                            </Col>
                        </Row>

                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityAvgPrice;

