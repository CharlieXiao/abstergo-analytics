import React,{useState,useEffect} from 'react'
import PageHeader from '../../component/pageheader'
import InputTable from '../../component/inputTable'
import Map from '../../component/cityMap'

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '城市间平均价格'
        }, {
            path: '/city/linenum',
            title: '城市航班数'
        }]
    },
    {
        breadcrumbName: '城市间平均价格',
    },
];

const CityAvgPrice = () => {
    const [queryData,setQueryData] = useState({})
    useEffect(()=>{
        console.log(queryData)
    },[queryData])
    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="城市间平均价格" routes={routes} />
            <div className="ab-container">
                <InputTable onFormSubmit={setQueryData}/>
                <Map/>
            </div>
        </div>
    );
}

export default CityAvgPrice;