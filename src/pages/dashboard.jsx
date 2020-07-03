import React from 'react'
import PriceAffectedChart from "./dashboard-component/PriceAffectedTotalChart"
import LineNumAffectedTotalChart from "./dashboard-component/LineNumAffectedTotalChart"
import DayTimeAndPriceChart from "./dashboard-component/DayTimeAndPriceChart"

const Dashboard = (props)=>{
    return (
        <div>
            <PriceAffectedChart />
            <LineNumAffectedTotalChart />
            <DayTimeAndPriceChart />
        </div>
         
    );
}

export default Dashboard;