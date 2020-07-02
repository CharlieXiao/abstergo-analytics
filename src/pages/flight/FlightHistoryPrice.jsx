import React,{useState,useEffect} from 'react'
import PageHeader from '../../component/pageheader'
import FlightHistoryInputTable from '../../component/FlightHistoryInputTable'
import FlightHistoryChart from "../../component/FlightHistoryChart"
import { Skeleton } from 'antd'

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '航班',
        menu: [{
            path: '/flight/companyinfo',
            title: '航空公司相关信息'
        },]
    },
    {
        breadcrumbName: '航班历史价格',
    },
];

const FlightHistoryPrice = ()=>{

    const [flightData,setFlightData] = useState([]);
    const [loading, setLoading] = useState(true);
    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(() => {
            const res = [
                {
                    year: "2020-7-2",
                    price: 3
                },
                {
                    year: "2020-7-1",
                    price: 4
                },
                {
                    year: "2020-6-30",
                    price: 3.5
                },
                {
                    year: "2020-6-29",
                    price: 5
                },
                {
                    year: "2020-6-28",
                    price: 4.9
                },
                {
                    year: "2020-6-27",
                    price: 6
                },
                {
                    year: "2020-6-26",
                    price: 7
                },
                {
                    year: "2020-6-25",
                    price: 9
                },
                {
                    year: "2020-6-24",
                    price: 13
                }
            ];
            setFlightData(res)
            setLoading(false)
        }, 1000)
    }

    useEffect(()=>{
        setLoading(true)
        setFlightData([{
            year: "2020-7-2",
            price: 3
        },
        {
            year: "2020-7-1",
            price: 4
        },]);
        setLoading(false);
    },[])

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航班历史价格" routes={routes} />
            <div className="ab-container">
                <FlightHistoryInputTable onFormSubmit={onFormSubmit}/>
            </div>
            <Skeleton loading={loading} active>
                <FlightHistoryChart data={flightData}/>
            </Skeleton>
        </div>  
    );
}

export default FlightHistoryPrice;