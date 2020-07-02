import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import CityDayForm from '../../component/CityDayForm'
import { Skeleton } from 'antd'
import { Chart, Line, Point,Tooltip } from 'bizcharts';

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/avgprice',
            title: '平均机票价格'
        }, {
            path: '/city/linenum',
            title: '航班数'
        }]
    },
    {
        breadcrumbName: '最低机票价格',
    },
];

// data template
// const flightdata = [
//     { date: '2020-05-01', price: 1500, line: '厦门航空MF8509' },
//     { date: '2020-05-02', price: 1624, line: '南方航空CZ3393' },
//     { date: '2020-05-03', price: 1190, line: '南方航空CZ3157' },
//     { date: '2020-05-04', price: 1500, line: '南方航空CZ3157' },
//     { date: '2020-05-05', price: 1610, line: '四川航空3U8742' },
//     { date: '2020-05-06', price: 2030, line: '深圳航空ZH9431' },
//     { date: '2020-05-07', price: 1210, line: '四川航空3U8547' },
//     { date: '2020-05-08', price: 1050, line: '吉祥航空HO1275' },
//     { date: '2020-05-09', price: 1130, line: '海南航空HU7956' },
//     { date: '2020-05-10', price: 1610, line: '东方航空MU5431' },
//     { date: '2020-05-11', price: 1780, line: '深圳航空ZH9428' },
//     { date: '2020-05-12', price: 2100, line: '上海航空FM9549' },
// ]

const CityMinPrice = () => {
    // const [queryData,setQueryData] = useState({dep:'CTU',arr:'CKG'})
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    // 初始状态默认图表
    useEffect(() => {
        const res = [
            { date: '2020-05-01', price: 1500, line: '厦门航空MF8509' },
            { date: '2020-05-02', price: 1624, line: '南方航空CZ3393' },
            { date: '2020-05-03', price: 1190, line: '南方航空CZ3157' },
            { date: '2020-05-04', price: 1500, line: '南方航空CZ3157' },
            { date: '2020-05-05', price: 1610, line: '四川航空3U8742' },
            { date: '2020-05-06', price: 2030, line: '深圳航空ZH9431' },
            { date: '2020-05-07', price: 1210, line: '四川航空3U8547' },
            { date: '2020-05-08', price: 1050, line: '吉祥航空HO1275' },
            { date: '2020-05-09', price: 1130, line: '海南航空HU7956' },
            { date: '2020-05-10', price: 1610, line: '东方航空MU5431' },
            { date: '2020-05-11', price: 1780, line: '深圳航空ZH9428' },
            { date: '2020-05-12', price: 2100, line: '上海航空FM9549' },
        ]
        setData(res)
        setLoading(false)
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(() => {
            const res = [
                { date: '2020-05-01', price: 1500, line: '厦门航空MF8509' },
                { date: '2020-05-02', price: 1624, line: '南方航空CZ3393' },
                { date: '2020-05-03', price: 1190, line: '南方航空CZ3157' },
                { date: '2020-05-04', price: 1500, line: '南方航空CZ3157' },
                { date: '2020-05-05', price: 1610, line: '四川航空3U8742' },
                { date: '2020-05-06', price: 2030, line: '深圳航空ZH9431' },
                { date: '2020-05-07', price: 1210, line: '四川航空3U8547' },
                { date: '2020-05-08', price: 1050, line: '吉祥航空HO1275' },
                { date: '2020-05-09', price: 1130, line: '海南航空HU7956' },
                { date: '2020-05-10', price: 1610, line: '东方航空MU5431' },
                { date: '2020-05-11', price: 1780, line: '深圳航空ZH9428' },
                { date: '2020-05-12', price: 2100, line: '上海航空FM9549' },
            ]
            setData(res)
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="最低机票价格" routes={routes} />
            <div className="ab-container">
                <CityDayForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <Chart
                            height={500}
                            data={data}
                            scale={{ price: { min: 500 } }}
                            autoFit
                            padding={[10, 20, 50, 40]}
                        >
                            <Line position="date*price" shape="smooth" tooltip={false} />
                            <Point position="date*price" size={5} tooltip={{ fields: ['price', 'line'] }} style={{cursor:"pointer"}}/>
                            {/* 对Tooltip详细设置 */}
                            <Tooltip showCrosshairs={true}/>
                        </Chart>

                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityMinPrice;
