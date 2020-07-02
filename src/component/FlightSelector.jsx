import React,{useEffect} from "react"
import { Select } from 'antd';
const { Option } = Select;


const FlightSelector = ({formDataChange,flightData}) =>{

  

    function onChange(value) {
        console.log(value);
        formDataChange(value);
      }

      return(
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="选择航班"
        optionFilterProp="children"
        onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {/* <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option> */}
        {
            flightData.map((element,index)=>{
            return <Option value = {element} key={index}>{element}</Option>
            })
        }
      </Select>
      );
      
}

export default FlightSelector;