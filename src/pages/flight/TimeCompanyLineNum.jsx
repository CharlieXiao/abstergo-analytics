import React, { useState, useEffect } from 'react'
import { Card, Select, Row, Col, Form, Button, Switch } from 'antd'
import { Line } from '@ant-design/charts';
import PageHeader from '../../component/pageheader'
import axios from 'axios';
import { host } from "../../config"

import { company } from "../../city"

const { Option } = Select;


const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '航班',
        menu: [
            {
                path: '/flight/historyprice',
                title: '历史价格查询'
            },
            {
                path: '/flight/companyinfo',
                title: '航空公司相关信息'
            },
        ]
    },
    {
        breadcrumbName: '航空公司起降数时间段',
    },
];

/**
 * 
 * 多折线动画图
 * @param {传入的画图的data}} param0 
 */
const CompanyLineNumByTimeChart = ({ data, direction }) => {

    console.log(data);


    const config = {
        title: {
            visible: false,
            text: '一天内0点到24点各航空公司起降数折线图',
        },
        description: {
            visible: false,
            text:
                '图形标签 (label) 位于折线尾部\uFF0C用于标注整根折线\uFF0C并有带有排名的含义在其中\u3002',
        },
        padding: [20, 100, 30, 80],
        forceFit: true,
        data,
        xField: 'clock',
        yField: 'lineNum',
        seriesField: 'company', //多折线的分段凭据
        xAxis: {
            type: 'dateTime',
            label: {
                visible: true,
                autoHide: true,
            },
            formatter: (v) => `${v}:00`
        },
        yAxis: {
            formatter: (v) => direction === "dep" ? `起飞数${(v)} ` : `降落数${(v)} `
        },
        legend: { visible: false },
        label: {
            visible: true,
            type: 'line',
        },
        animation: { appear: { animation: 'clipingWithData' } },
        smooth: true,
        height: 400,
    };
    return <Line {...config} />;

}

//多航空公司选择器
const MutipleCompanySelector = ({ selectorDataChange }) => {

    function handleChange(value) {
        selectorDataChange(value);
    }

    return (
        <Select
            mode="multiple"
            showSearch
            style={{ minWidth: '100%' }}
            placeholder="选择航空公司"
            onChange={handleChange}
        >
            {
                company.map((element, index) => {
                    return <Option key={index} value={element.comp_name}>{`${element.comp_name} ${element.comp_code}`}</Option>
                })
            }
        </Select>
    )

}


//表单
//城市输入表单
const CompanyInputTable = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm(); //没啥用
    // const [companyList, setCompanyList] = useState([]);


    // 数据变化回调函数
    const onCompanyChange = (value) => {

        form.setFieldsValue({
            companyList: value
        })

        //每当选择器选择的内容变化，重新设置companylist,value是一个数组
        // setCompanyList(value);
    }

    const onFinish = (values) => {
        onFormSubmit(values.companyList);
    };

    const onReset = () => {
        form.resetFields();
        //setCompanyList([]);
    };


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
                            <Form.Item name="companyList" label="航空公司" rules={[{ required: true, message: "请选择航空公司" }]}>
                                <MutipleCompanySelector selectorDataChange={onCompanyChange} />
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

//主组件
const TimeCompanyLineNum = () => {

    const [data, setData] = useState([]);
    const [rawdata, setRawdata] = useState("");
    const [direction, setDirection] = useState("");

    /**
     * 获取并设置data
     */
    const getAndSetData = (companyList) => {

        axios.post(host + "/company/getCompanyTime", { companyList }).then((res) => {
            console.log(res);
            if (res.data.success) {
                setRawdata(res.data.data);
                setData(res.data.data.dep); //第一请求时请求为dep
            } else {
                alert(res.data.msg);
            }
        }).catch((e) => {
            //alert("网络请求错误");
            let data = [

                {
                    company: "南方航空",
                    clock: "00",
                    lineNum: 1000
                },
                {
                    company: "南方航空",
                    clock: "01",
                    lineNum: 2000
                },
                {
                    company: "南方航空",
                    clock: "02",
                    lineNum: 3000
                },
                {
                    company: "东方航空",
                    clock: "00",
                    lineNum: 3000
                },
                {
                    company: "东方航空",
                    clock: "01",
                    lineNum: 2000
                },
                {
                    company: "东方航空",
                    clock: "02",
                    lineNum: 1000
                },

            ];
            setData(data);
        })
    }


    /**
     * 处理表单提交事件
     * @param {表单提交时提供的公司数组} companyList 
     */
    const onFormSubmitHandler = (companyList) => {
        console.log(companyList);

        getAndSetData(companyList);
    }

    const onSwitchChangeHandler = () => {
        console.log(rawdata);

        if (direction === "dep") {
            setDirection("arr");
            setData(rawdata.arr);
        } else {
            setDirection("dep")
            setData(rawdata.dep);
        }
    }

    useEffect(() => {
        let companyList = ["南方航空", "东方航空", "中国国际航空"];
        getAndSetData(companyList);
        setDirection("dep");
    }, [])



    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航空公司起降数时间段" routes={routes} />
            <div className="ab-container">
                < CompanyInputTable onFormSubmit={onFormSubmitHandler} />
                <Card title="各航空公司在不同时间段起降数图" extra={
                    <div>
                        <span>出发：</span>
                        <Switch defaultChecked onChange={onSwitchChangeHandler} style={{ marginLeft: "10px" }} />
                    </div>

                }>
                    <CompanyLineNumByTimeChart data={data} direction={direction} />
                </Card>
            </div>
        </div>
    )
}

export default TimeCompanyLineNum