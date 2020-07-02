import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Skeleton, Row, Col, Form, Button, DatePicker } from 'antd'
import echarts from 'echarts';
// import 'echarts/map/js/china';
import geoJson from 'echarts/map/json/china.json';
import { cityCord, cityArray } from '../../city';
import locale from "antd/es/date-picker/locale/zh_CN";

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
            path: '/city/avgprice',
            title: '平均机票价格'
        }]
    },
    {
        breadcrumbName: '各市航班数量',
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
                        <Col xs={24} sm={12} md={12} lg={12} xl={24} xxl={6}>
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

const convertData = (data) => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = cityCord[data[i].city];
        if (geoCoord) {
            res.push({
                name: data[i].city,
                value: [geoCoord.log, geoCoord.lat, Math.floor(Math.random()*20)+1],
                type: 'node'
            });
        }
    }
    return res;
};

const NodeSeries = {
    name: '航班起降数',
    type: 'scatter',
    coordinateSystem: 'geo',
    data:convertData(cityArray),
    cursor:'pointer',
    symbolSize:(value,params)=>{
        // 保证最小大小为5
        return 5+value[2]
    }
}

const option = {
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
        containLabel: true
    },
    visualMap:{
        type:'continuous',
        calculable:false,
        min:1,
        max:20,
    },
    geo: {
        map: 'china',
        roam:true,
        scaleLimit:{
            // 最小缩放值
            min:1,
            // 最大缩放倍数
            max:10
        },
        zoom: 1.2,
        silent: true,
        itemStyle: {
            areaColor: '#fff',
            borderColor: '#666'
        }
    },
    series: [
        NodeSeries
    ]

}

class ScatterMap extends React.Component {
    componentDidMount() {
        this.initalECharts();
    }

    componentWillUpdate() {
        if (this.myChart) {
            this.myChart.resize('auto', 'auto')
        }
    }

    initalECharts() {
        echarts.registerMap('china', geoJson);
        this.myChart = echarts.init(document.getElementById('mainMap'));
        this.myChart.setOption(option)
    }

    render() {
        return (
            <div id="mainMap" style={{ width: '70vw', height: '70vh',margin:'auto' }} ></div>
        );
    }
}

const CityLineNum = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [chartName, setChartName] = useState("")
    useEffect(() => {
        
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            setChartName(`${queryData.month} 各市航班起降数量`)
        },1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="各市航班数量" routes={routes} />
            <div className="ab-container">
                <PriceMonthForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <div className="ab-chart-title">{chartName}</div>
                        <ScatterMap/>
                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityLineNum;

