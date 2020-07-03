import React from 'react'
import PriceAffectedChart from "./dashboard-component/PriceAffectedTotalChart"
import LineNumAffectedTotalChart from "./dashboard-component/LineNumAffectedTotalChart"
import DayTimeAndPriceChart from "./dashboard-component/DayTimeAndPriceChart"
import YearPriceBarChart from './dashboard-component/YearPriceBarChart'
import CompanyPriceBarChart from './dashboard-component/CompanyPriceBarChart'
import CompanyLineNumRoseChart from './dashboard-component/CompanyLineNumRoseChart'
import {Row,Col} from 'antd'
        
const Dashboard = (props)=>{
    return (
        <div className="ab-container">
            <Row gutter={[24,24]}>
            <Col xs={24} sm={24} md={16} lg={16} xl={12} xxl={12}>
                <YearPriceBarChart/>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={12} xxl={12}>
                <CompanyLineNumRoseChart/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <CompanyPriceBarChart/>
            </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
               <PriceAffectedChart />
            </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <LineNumAffectedTotalChart />
            </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <DayTimeAndPriceChart />
            </Col>
        </Row>  
        </div>    
    );
}

export default Dashboard;