import React, { useState, useEffect } from 'react'
import { Row, Col, Select } from 'antd'
import CitySelector from "../../component/citySelector";
import { Skeleton, Form, Button } from "antd";
import PageHeader from '../../component/pageheader'
import { ColumnLine } from '@ant-design/charts';
import { getCityByCode } from "../../city"


const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '新冠疫情专题',
        menu: [{
            path: '/corona/linenum',
            title: '航班数量变化'
        },]
    },
    {
        breadcrumbName: '机票价格变化',
    },
];


//城市输入表单
const CityInputTable = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm();

    // 数据变化回调函数
    const onArrCityChange = (value) => {
        form.setFieldsValue({
            arr_city: value,
        });
        form.validateFields(["arr_city"]);

    }


    const onFinish = (values) => {
        if (onFormSubmit) {
            const data = {
                arr: values.arr_city,
            };
            onFormSubmit(data);
        }
    };

    const onReset = () => {
        form.resetFields();
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
                            <Form.Item
                                name="arr_city"
                                label="到达城市"
                                rules={[{ required: true, message: '请选择城市' }]}
                                className="ab-form-item"
                            >
                                <CitySelector formDataChange={onArrCityChange} />
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


//价格-感染人数图表
const PriceAffectedChart = ({ priceData, affectedData }) => {

    const config = {
        title: {
            visible: false,
            text: '柱线混合图',
        },
        description: {
            visible: false,
            text: '柱线混合图表',
        },
        data: [affectedData, priceData],
        xField: '时间',
        yField: ['感染人数', '价格'],
        columnConfig: { color: '#b71c1c' }, //A52A2A
        lineConfig: {
            color: 'rgb(91,143,249)',
            point: { visible: true, shape: 'diamond' },
            label: { visible: true },
            lineSize: 2,
        },
    };

    return <ColumnLine {...config} />;

}

//页面主组件
const CoronaPrice = () => {


    console.log("render");

    const [priceData, setPriceData] = useState([]);
    const [affectedData, setAffectedData] = useState([]);
    const [city, setCity] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        let priceData = [
            {
                时间: '2019-03',
                价格: 350,
            },
            {
                时间: '2019-04',
                价格: 900,
            },
            {
                时间: '2019-05',
                价格: 300,
            },
            {
                时间: '2019-06',
                价格: 450,
            },
            {
                时间: '2019-07',
                价格: 470,
            },
        ];
        let affectedData = [
            {
                时间: '2019-03',
                感染人数: 800,
            },
            {
                时间: '2019-04',
                感染人数: 600,
            },
            {
                时间: '2019-05',
                感染人数: 400,
            },
            {
                时间: '2019-06',
                感染人数: 380,
            },
            {
                时间: '2019-07',
                感染人数: 220,
            },
        ];
        setPriceData(priceData);
        setAffectedData(affectedData);

    }, [])

    const onFormSubmit = (data) => {
        console.log(data);
        setCity(`${getCityByCode(data.arr)}的感染人数和到达该城市机票价格随时间变化图`)
        //根据拿到的城市信息查询priceData和affectedData
        //这里给假数据
        let priceData = [
            { 时间: '2019-03-10', 价格: 350, },
            { 时间: '2019-03-20', 价格: 360, },
            { 时间: '2019-03-30', 价格: 370, },
            { 时间: '2019-04-10', 价格: 380, },
            { 时间: '2019-04-20', 价格: 550, },
            { 时间: '2019-04-30', 价格: 250, },
            { 时间: '2019-05-10', 价格: 850, },
            { 时间: '2019-05-20', 价格: 950, },
            { 时间: '2019-05-30', 价格: 350, },
            { 时间: '2019-06-10', 价格: 350, },
        ];
        let affectedData = [
            { 时间: '2019-03-10', 感染人数: 23, },
            { 时间: '2019-03-20', 感染人数: 35, },
            { 时间: '2019-03-30', 感染人数: 89, },
            { 时间: '2019-04-10', 感染人数: 69, },
            { 时间: '2019-04-20', 感染人数: 345, },
            { 时间: '2019-04-30', 感染人数: 2220, },
            { 时间: '2019-05-10', 感染人数: 3500, },
            { 时间: '2019-05-20', 感染人数: 4500, },
            { 时间: '2019-05-30', 感染人数: 7000, },
            { 时间: '2019-06-10', 感染人数: 10000, },

        ];
        setPriceData(priceData);
        setAffectedData(affectedData);


    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="机票价格变化" routes={routes} />
            <div className="ab-container">
                <CityInputTable onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    {/* <Skeleton loading={loading} active>
                        
                    </Skeleton> */}
                    <div className="ab-chart-title">{city}</div>
                    <PriceAffectedChart priceData={priceData} affectedData={affectedData} />
                </div>
            </div>
        </div>
    );
}

export default CoronaPrice;