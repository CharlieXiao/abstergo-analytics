import { Form, Button } from "antd";
import React,{useState} from "react";
import CitySelector from "./citySelector";
import FlightSelector from "./FlightSelector"


const InputTable = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm();

    const [flightData,setFlightData] = useState([]);

    // 数据变化回调函数

    const onDeptCityChange = (value) => { 
        form.setFieldsValue({
            dep_city: value,
        });
        form.validateFields(["dep_city"]);

        //每次输入完城市后，判断实入是否完成，如果完成就查询航班数据
        let curValues = form.getFieldsValue();
        if(curValues.arr_city === undefined || curValues.dep_city === undefined ){
            //清空FlightData
            setFlightData([]);
        }
        else{
            setFlightData(getFlightData(curValues.arr_city,curValues.dep_city));
        }

    };

    const onArrCityChange = (value) => {
        form.setFieldsValue({
            arr_city: value,
        });
        // 数据输入完成后验证数据
        form.validateFields(["arr_city"]);
        //每次输入完城市后，判断输入是否完成，如果完成就查询航班数据
        let curValues = form.getFieldsValue();
        if(curValues.arr_city === undefined || curValues.dep_city === undefined ){
            //清空FlightData
            setFlightData([]);
        }
        else{

            setFlightData(getFlightData(curValues.arr_city,curValues.dep_city)); //这里的set是异步的
        } 
    };

    const getFlightData =(dep_city,arr_city)=>{
        //临时数据，到时候改为网络请求
        return ["AA1234","AA2345","AA3456"];
    }

    const onFlighChange = (value)=>{
        form.setFieldsValue({
            flight: value,
        });
        form.validateFields(["flight"]);
    };

    const onFinish = (values) => {
        if (onFormSubmit) {
            const data = {
                dep: values.dep_city,
                arr: values.arr_city,
                flight: values.flight,
            };
            onFormSubmit(data);
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    const citySelectRules = [
        { required: true, message: '请选择城市' },
        // 自定义验证规则
        ({ getFieldValue }) => ({
            validator(rule, value) {
                if (!value || getFieldValue("arr_city") !== getFieldValue("dep_city")) {
                    return Promise.resolve();
                }
                return Promise.reject("出发城市和目的城市不能相同");
            },
        }),
    ];

    return (
        <div className="ab-form-container">
            <Form
                form={form}
                // 表单名称
                name="cityminprice"
                // 结束回调函数
                onFinish={onFinish}
                layout="inline"
                // 隐藏必须输入标记
                hideRequiredMark
            >
                <Form.Item
                    name="dep_city"
                    label="出发城市"
                    rules={citySelectRules}
                    className="ab-form-item"
                >
                    <CitySelector formDataChange={onDeptCityChange} />
                </Form.Item>
                <Form.Item
                    name="arr_city"
                    label="目的城市"
                    rules={citySelectRules}
                    className="ab-form-item"
                >
                    <CitySelector formDataChange={onArrCityChange} />
                </Form.Item>

                <Form.Item
                    name="flight"
                    label="航班号"
                    rules={[{ required: true, message: '请选择航班号' }]}
                    className="ab-form-item"
                >
                    <FlightSelector formDataChange={onFlighChange} flightData={flightData}/>
                </Form.Item>


                <Form.Item className="ab-form-item">
                    <Button type="primary" htmlType="submit" className="ab-form-button">
                        Submit
          </Button>
                    <Button
                        htmlType="button"
                        onClick={onReset}
                        className="ab-form-button"
                    >
                        Reset
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default InputTable;
