import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Row, Col, Form, Button, DatePicker } from 'antd'
import { Chart, Coordinate, Interval, Tooltip } from "bizcharts";
import locale from "antd/es/date-picker/locale/zh_CN";
import DataSet from "@antv/data-set";

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/minprice',
            title: '最低机票价格'
        }, {
            path: '/city/linenum',
            title: '各市航班数量'
        }]
    },
    {
        breadcrumbName: '平均机票价格',
    },
];


const PriceMonthForm = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (onFormSubmit) {
            const data = {
                month: values.month.format("YYYY-MM"),
            }
            onFormSubmit(data);
        }
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
                                name="month"
                                label="月份"
                                rules={[{ required: true, message: "请选择月份" }]}
                            >
                                {/* 日期范围选择器 */}
                                <DatePicker
                                    picker="month"
                                    locale={locale}
                                    style={{ maxWidth: "230px" }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={16} xxl={6}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                                    查询
                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

const CityAvgPrice = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [chartName, setChartName] = useState("")
    useEffect(() => {
        setLoading(false)
        const res = [
            {
                country: "中国",
                population: 131744
            },
            {
                country: "印度",
                population: 104970
            },
            {
                country: "美国",
                population: 29034
            },
            {
                country: "印尼",
                population: 23489
            },
            {
                country: "巴西",
                population: 18203
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(res);
        dv.source(res).transform({
            type: "sort",
            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.population - b.population;
            }
        });
        setData(dv.rows)
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setChartName(`${queryData.month} 各城市平均机票价格排名`)
        }, 1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="平均机票价格" routes={routes} />
            <div className="ab-container">
                <PriceMonthForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <div className="ab-chart-title">{chartName}</div>
                        <Row gutter={24}>
                            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                                <Chart height={500} data={data} autoFit>
                                    {/* 设置成条形图 */}
                                    <Coordinate transpose />
                                    <Interval position="country*population" />
                                    <Tooltip showMarkers={false} />
                                </Chart>
                            </Col>
                            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                                this is detail
                            </Col>
                        </Row>

                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityAvgPrice;

