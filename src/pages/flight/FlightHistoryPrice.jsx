import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Form, Button, Card } from "antd";
import CitySelector from "../../component/citySelector";
import { Row, Col, Select } from 'antd'
//import { Chart, Line, Point,Tooltip } from 'bizcharts';
import axios from 'axios';
import { host } from "../../config"
import { Line } from '@ant-design/charts';

const { Option } = Select;

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
        }, {
            path: '/flight/timecompanylinenum',
            title: '航空公司起降数时间段'
        },
        ]
    },
    {
        breadcrumbName: '航班历史价格',
    },
];

const FlightSelector = ({ formDataChange, flightData }) => {



    function onChange(value) {
        console.log(value);
        formDataChange(value);
    }

    return (
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
                flightData.map((element, index) => {
                    return <Option value={element} key={index}>{element}</Option>
                })
            }
        </Select>
    );

}

const FlightHistoryInputTable = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm();
    const [flightData, setFlightData] = useState([]);

    /**
    * 根据出发城市和到达城市查询有哪些航班
    * @param {出发城市} dep_city 
    * @param {到达城市} arr_city 
    */
    const getAndSetFlightData = (dep_city, arr_city) => {
        axios.get(host + "/flight/getCityToCityFlights?dep_city=" + dep_city + "&arr_city=" + arr_city).then((res) => {
            console.log(dep_city + "=>" + arr_city);

            console.log("233333");
            console.log(res);
            if (res.data.success) {
                setFlightData(res.data.data);
            } else {
                alert(res.data.msg);
            }
        }).catch((e) => {
            alert("连接异常");
            let data = ["AA1234", "AA2345", "AA3456"];
            setFlightData(data);
        })
    }

    // 数据变化回调函数
    const onDeptCityChange = (value) => {
        form.setFieldsValue({
            dep_city: value,
        });
        form.resetFields(["flight"]); //清除航班号
        form.validateFields(["dep_city"]);

        //每次输入完城市后，判断输入是否完成，如果完成就查询航班数据
        let curValues = form.getFieldsValue();
        if (curValues.arr_city === undefined || curValues.dep_city === undefined) {
            //清空FlightData
            setFlightData([]);
        }
        else {
            getAndSetFlightData(curValues.dep_city, curValues.arr_city);//这里的set是异步的
        }

    };

    const onArrCityChange = (value) => {
        form.setFieldsValue({
            arr_city: value,
        });
        form.resetFields(["flight"]);
        // 数据输入完成后验证数据
        form.validateFields(["arr_city"]);
        //每次输入完城市后，判断输入是否完成，如果完成就查询航班数据
        let curValues = form.getFieldsValue();
        if (curValues.arr_city === undefined || curValues.dep_city === undefined) {
            //清空FlightData
            setFlightData([]);
        }
        else {
            getAndSetFlightData(curValues.dep_city, curValues.arr_city);//这里的set是异步的
        }
    };



    const onFlighChange = (value) => {
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
            <div>
                <Form
                    form={form}
                    // 表单名称
                    name="cityminprice"
                    // 结束回调函数
                    onFinish={onFinish}
                    layout="horizontal"
                    // 隐藏必须输入标记
                    hideRequiredMark
                >
                    <Row gutter={[16, 8]}>
                        <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
                            <Form.Item
                                name="dep_city"
                                label="出发城市"
                                rules={citySelectRules}
                                className="ab-form-item"
                            >
                                <CitySelector formDataChange={onDeptCityChange} />
                            </Form.Item>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
                            <Form.Item
                                name="arr_city"
                                label="目的城市"
                                rules={citySelectRules}
                                className="ab-form-item"
                            >
                                <CitySelector formDataChange={onArrCityChange} />
                            </Form.Item>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
                            <Form.Item
                                name="flight"
                                label="航班号"
                                rules={[{ required: true, message: '请选择航班号' }]}
                                className="ab-form-item"
                            >
                                <FlightSelector formDataChange={onFlighChange} flightData={flightData} />
                            </Form.Item>
                        </Col>


                        <Col xs={24} sm={12} md={12} lg={12} xl={24} xxl={6}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                                    查询
                                </Button>
                                <Button htmlType="button" onClick={onReset} style={{ marginLeft: "10px" }} >
                                    重置
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};


const AntPriceLineChart = ({ data }) => {
    const config = {
        meta: {
            price: {
                alias: '价格',
                formatter: (v) => { return `￥${v}` }
            }
        },
        title: {
            visible: false,
            text: '配置折线数据点样式',
        },
        description: {
            visible: false,
            text: '自定义配置趋势线上数据点的样式',
        },
        padding: 'auto',
        forceFit: true,
        data,
        xField: 'day',
        yField: 'price',
        label: {
            visible: false,
            type: 'point',
        },
        point: {
            visible: false,
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        },
        height: 600
    };
    return <Line {...config} />;
}


const FlightHistoryPrice = () => {

    const [flightData, setFlightData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chartName, setChartName] = useState("");


    /**
     * 获取并设置特定航班号航班的历史价格
     * @param {出发城市}} dep_city 
     * @param {到达城市} arr_city 
     * @param {航班号} flightNum 
     */
    const getAndSetFlightData = (dep_city, arr_city, flightNum) => {
        axios.get(host + "/flight/getFlightHistoryPrice?dep_city=" + dep_city + "&arr_city=" + arr_city + "&flightNum=" + flightNum).then((res) => {
            console.log(res);

            if (res.data.success) {
                setFlightData(res.data.data);
            } else {
                console.log(res.data.msg);

            }
        }).catch((e) => {
            let res = [
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
            setFlightData(res);
        })
    }

    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(() => {
            setChartName(`${queryData.flight} 号航班的历史价格`)
            getAndSetFlightData(queryData.dep, queryData.arr, queryData.flight);
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        setLoading(true)
        setChartName("上海航空FM9166 号航班的历史价格");
        getAndSetFlightData("CKG", "SHA", "上海航空FM9166");
        setLoading(false);
    }, [])

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航班历史价格" routes={routes} />
            <div className="ab-container">
                <FlightHistoryInputTable onFormSubmit={onFormSubmit} />
                <Card title={chartName}>
                <Skeleton loading={loading} active>
                        < AntPriceLineChart data={flightData} />
                    </Skeleton>
                </Card>
    
            </div>
        </div>
    );
}

export default FlightHistoryPrice;