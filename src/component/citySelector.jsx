import React from 'react'

import { Select } from 'antd';

import cityArray from '../city'
const { Option } = Select;

const CitySelector = ({formDataChange}) => {
    const onChange = (value)=>{
        if(formDataChange){
            formDataChange(value)
        }
    }
    // const onBlur = ()=> {
    //     console.log('blur');
    // }
    
    // const onFocus = ()=>{
    //     console.log('focus');
    // }
    
    // const onSearch = (val)=>{
    //     console.log('search:', val);
    // }

    return (
        <Select
            // 可以进行清除操作
            allowClear
            // 单选模式可以进行搜索
            showSearch
            placeholder="选择城市"
            // 
            optionFilterProp="children"
            // 数据发送变化的回调函数
            onChange={onChange}
            style={{width:"130px"}}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            // 数据选择器，数据code或城市名进行快速选择
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                cityArray.map((element,index)=>{
                return (<Option value={element.code} key={index}>{`${element.city} ${element.code}`}</Option>)
                })
            }
        </Select>
    )
}

export default CitySelector