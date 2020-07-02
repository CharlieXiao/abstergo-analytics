import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import PriceMonthForm from '../../component/PriceMonthForm';
import { Skeleton } from 'antd'
import ScatterMap from '../../component/ScatterMap'

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
            path: '/city/avgprice',
            title: '平均机票价格'
        }]
    },
    {
        breadcrumbName: '各市航班数量',
    },
];

const CityLineNum = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="各市航班数量" routes={routes} />
            <div className="ab-container">
                <PriceMonthForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <ScatterMap/>
                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityLineNum;

