import React from 'react'
import {Route,Switch} from 'react-router-dom'
import NotFound from '../pages/404'
import Dashboard from '../pages/dashboard'
import CityAvgPrice from '../pages/city/avgprice'
import CityMinPrice from '../pages/city/minprice'
import CityLineNum from '../pages/city/linenum'
import FlightHistoryPrice from '../pages/flight/FlightHistoryPrice'
import FlightCompanyInfo from "../pages/flight/FlightCompanyInfo"
import CoronaLineNum from '../pages/corona/linenum'
import CoronaPrice from '../pages/corona/price'
import Trivial from '../pages/trivial'
import TimePrice from '../pages/city/timeprice'
import TimeCompanyLineNum from '../pages/flight/TimeCompanyLineNum'


const PageRouter = ()=>{
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} exact/>
            <Route path="/city/minprice" component={CityMinPrice} exact/>
            <Route path="/city/avgprice" component={CityAvgPrice} exact/>
            <Route path="/city/linenum" component={CityLineNum} exact/>
            <Route path="/city/timeprice" component={TimePrice} exact/>
            <Route path="/flight/companyinfo" component={FlightCompanyInfo} exact />
            <Route path="/flight/historyprice" component={FlightHistoryPrice} exact/>
            <Route path="/flight/timecompanylinenum" component={TimeCompanyLineNum} exact/>
            <Route path="/corona/price" component={CoronaPrice} exact/>
            <Route path="/corona/linenum" component={CoronaLineNum} exact/>
            <Route path="/trivial" component={Trivial} exact/>
            
            <Route component={NotFound}/>
        </Switch>
    )
}

export default PageRouter