import React from "react"
import { Chart, Line, Point } from 'bizcharts';
import ReactDOM from 'react-dom';



const FlightHistoryChart =({data}) =>{

  return <Chart
    padding={[10,20,50,40]}
    autoFit
    height={500}
    data={data}
    scale={{ price: { min: 0 } }}
  >
    <Line position="year*price"  />
    <Point position="year*price" />
  </Chart>
}


export default FlightHistoryChart;





