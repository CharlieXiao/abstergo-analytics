import React,{useState,useEffect} from 'react'
import PageHeader from '../../component/pageheader'
import FlightHistoryInputTable from '../../component/FlightHistoryInputTable'
const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '航班',
        menu: [{
            path: '/city/minprice',
            title: '城市间平均价格'
        }, {
            path: '/city/linenum',
            title: '城市航班数'
        }]
    },
    {
        breadcrumbName: '航班历史价格',
    },
];

const FlightHistoryPrice = ()=>{
    const [queryData,setQueryData] = useState({})
    useEffect(()=>{
        console.log(queryData)
    },[queryData])

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航班历史价格" routes={routes} />
            <div className="ab-container">
                <FlightHistoryInputTable onFormSubmit={setQueryData}/>
            </div>
        </div>   
    );
}

export default FlightHistoryPrice;