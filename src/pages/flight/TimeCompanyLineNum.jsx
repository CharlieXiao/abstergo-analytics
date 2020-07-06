import React, { useState, useEffect } from 'react'
import { Skeleton, Card } from 'antd'
import PageHeader from '../../component/pageheader'



const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '航班',
        menu: [
            {
                path: '/flight/historyprice',
                title: '历史价格查询'
            },
            {
                path: '/flight/companyinfo',
                title: '航空公司相关信息'
            },
        ]
    },
    {
        breadcrumbName: '航空公司起降数时间段',
    },
];


const TimeCompanyLineNum = ()=>{
    return (
         <div className="ab-page-header-wrapper">
            <PageHeader title="航空公司起降数时间段" routes={routes} />
            <div className="ab-container">
                <Card title="各航空公司在不同时间段起降数图">
                    xxxxxxxx
                </Card>
            </div>
        </div>
    )
}

export default TimeCompanyLineNum