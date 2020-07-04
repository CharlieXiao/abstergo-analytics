import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
import { Row, Col } from 'antd'
import { Select, Form, Button, Card } from 'antd';
import {
    Chart,
    Interval,
    Tooltip,
    Legend,
    View,
    Axis,
    Coordinate
} from 'bizcharts';
import { DataView, DataSet } from '@antv/data-set';
import axios from 'axios';
import { host } from "../../config"
import {company,getCodeByCompanyName, getCompanyNameByCode} from "../../city"

const { Option } = Select;
const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '航班',
        menu: [{
            path: '/flight/historyprice',
            title: '历史价格查询'
        },]
    },
    {
        breadcrumbName: '航班历史价格',
    },
];

//航空公司选择器
const CompanySeletor = ({ formDataChange }) => {

    const companyData = company;

    function onChange(value) {
        formDataChange(value);
    }

    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="选择航空公司"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                companyData.map((element, index) => {
                return <Option value={element.comp_code} key={index}>{element.comp_name} {element.comp_code}</Option>
                })
            }
        </Select>
    );

}

//航空公司表单
const InputTable = ({ onFormSubmit }) => {
    // 获取表单数据信息
    const [form] = Form.useForm();

    const onCompanyChange = (value) => {
        let data = { company: value };
        onFormSubmit(data);
    };

    return (
        <div className="ab-form-container">
            <Form
                form={form}
                // 表单名称
                name="cityminprice"
                // 结束回调函数
                // onFinish={onFinish}
                layout="horizontal"
                // 隐藏必须输入标记
                hideRequiredMark
            >
                <Row gutter={[16, 8]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
                        <Form.Item
                            name="company"
                            label="航空公司"
                            rules={[{ required: true, message: '请选择航空公司' }]}
                            className="ab-form-item"
                        >
                            <CompanySeletor formDataChange={onCompanyChange} />
                        </Form.Item>
                    </Col>

                    {/* <Col xs={24} sm={12} md={12} lg={12} xl={16} xxl={6}>
                        <Form.Item className="ab-form-item">
                            <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                                查询
                            </Button>
                        </Form.Item>
                    </Col> */}
                </Row>
            </Form>
        </div>
    );
};


//特定航空公司饼图
const PlaneTypePie = ({ data, isClicked }) => {

    // 通过 DataSet 计算百分比
    const dv = new DataView();
    dv.source(data).transform({
        type: 'percent',
        field: 'value',
        dimension: 'type',
        as: 'percent',
    });

    // console.log(dv.rows);


    const dv1 = new DataView();
    dv1.source(data).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent',
    });

    // console.log(dv1.rows);


    return (
        <Chart
            height={400}
            data={dv.rows}
            autoFit
            scale={{
                percent: {
                    formatter: (val) => {
                        val = (val * 100).toFixed(2) + '%';
                        return val;
                    },
                }
            }}
            onIntervalClick={ev => {
                const curData = ev.data.data;
                //根据data的name type 和 value尝试在data中匹配数据，如果匹配失败，就说明是内饼，如果成功，就说明是外饼
                let isInternal = true;
                console.log(curData);
                console.log(data);    
                data.map((element, index) => {
                    if (element.type === curData.type && element.name === curData.name && element.value === curData.value) {
                        //do nothing
                        isInternal = false;
                    } else {
                        // do nothing
                    }
                })

                if (isInternal) {
                    //是内饼
                    console.log("是内饼");
                    
                    isClicked(curData.type);
                } else {
                    //是外饼
                    console.log("是外饼");
                    
                    isClicked(curData.name);
                }
            }}
        >
            <Coordinate type="theta" radius={0.5} />
            <Axis visible={false} />
            <Legend visible={false} />
            <Tooltip showTitle={false} />
            <Interval
                position="percent"
                adjust="stack"
                color="type"
                element-highlight
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['type', {
                    offset: -15,
                }]}
            />
            <View data={dv1.rows}>
                <Coordinate type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
                <Interval
                    position="percent"
                    adjust="stack"
                    color={['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']]}
                    element-highlight
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    label="name"
                />
            </View>
        </Chart>
    );


}

//特定航空公司偏爱城市图
const CompanyLoveCountriesChart = ({ data }) => {

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
        type: "sort",
        callback(a, b) {
            // 排序依据，和原生js的排序callback一致
            return a.到达总航班数 - b.到达总航班数;
        }
    });

    return (
        <Chart data={dv.rows} autoFit>
            <Coordinate transpose />
            <Interval position="city*到达总航班数" />
            <Tooltip marker={false} />
        </Chart>
    );
}


//飞机详细介绍卡片
const PlaneCard = ({ content }) => {
    // console.log(content);
    return (
        <>
            <Card title={content.name} style={{ width: "300px" }}>
                <p>{content.introduction}</p>
            </Card>
        </>
    )
}


//页面主组件
const FlightCompanyInfo = () => {
    const [planeTypeData, setPlaneTypeData] = useState([]);
    const [loveCityData, setLoveCityData] = useState([]);
    const [planeInfos, setPlaneInfos] = useState([]);
    const [planeIntroduction, setPlaneIntroduction] = useState({ name: "", introduction: "" });
    const [chartName, setChartName] = useState("");


    /**
     * 获取并设置所有机型的以及介绍
     */
    const getAndSetPlaneInfos = () => {
        //发送axios请求获取所有机型以及介绍
        axios.get(host + "/plane/getPlanesIntroductions").then((res) => {
            if (res.data.success) {
                //收到数据的形式是{craftModelAKA:"波音747",craftDesc:"xxxxx"}
                let tmpInfos = res.data.data;
                let infos = [];

                for (let index in tmpInfos) {
                    infos.push({ name: tmpInfos[index].craftModelAKA, introduction: tmpInfos[index].craftDesc });
                }
                setPlaneInfos(infos);
            } else {
                console.log("Yichang ");
            }
        }).catch((e) => {
            alert("请求机型以及介绍数据异常");
            let infos = [
                { name: "波音737", introduction: "this is 波音737" },
                { name: "波音747", introduction: "this is 波音747" },
                { name: "空客", introduction: "this is 空客" },
                { name: "波音737-1", introduction: "this is 波音737-1" },
                { name: "波音737-2", introduction: "this is 波音737-2" },
                { name: "波音747-1", introduction: "this is 波音747-1" },
                { name: "波音747-2", introduction: "this is 波音747-2" },
                { name: "空客A318", introduction: "this is 空客A318" },
                { name: "空客A319", introduction: "this is 空客A319" }
            ];
            setPlaneInfos(infos);
        })
    }

    /**
     * 获取并设置航公公司所有飞机机型以及数量
     * @param {城市名，CKG} companyName 
     */
    function getAndSetPlaneTypeData(companyName) {
        //根据companyName 进行网络请求拿到对应航空公司的机型数据
        //通过axios获取飞机机型信息      
        axios.get(host+"/company/getAircraftInfos?companyName=" + companyName).then((res) => {
            if (res.data.success) {
                let tmpData = res.data.data;
                let data =[];
                for(let index in tmpData){
                    data.push({value:tmpData[index].num,type:tmpData[index].craftCompany,name:tmpData[index].craftFamily});
                }
                setPlaneTypeData(data);
            } else {
                console.log("not success");
            }
        }).catch((e) => {
            alert("请求机型占比异常");
            let types = [
                { value: 251, type: '波音737', name: '波音737-1' },
                { value: 1048, type: '波音737', name: '波音737-2' },
                { value: 610, type: '波音747', name: '波音747-1' },
                { value: 434, type: '波音747', name: '波音747-2' },
                { value: 335, type: '空客', name: '空客A318' },
                { value: 250, type: '空客', name: '空客A319' },
            ]
            setPlaneTypeData(types);
        })
    }

    /**
     * 获取并设置公司的偏爱城市列表
     * @param {城市名,CKG} companyName 
     */
    const getAndSetLoveCityData = (companyName) => {
        axios.get(host+"/company/getLoveCities?companyName=" + companyName).then((res) => {
            
            if (res.data.success) {
                let tmpData = res.data.data;
                let data = [];
                for(let index in tmpData){
                    data.push({city:tmpData[index].ct,到达总航班数:tmpData[index].count});
                }
                setLoveCityData(data);
            } else {
                console.log(res.data.msg);
            }
        }).catch((e) => {
            alert("获取偏爱城市异常");
            let data = [{ city: "重庆", 到达总航班数: 131744 },
            { city: "北京", 到达总航班数: 104970 },
            { city: "上海", 到达总航班数: 29034 },
            { city: "深圳", 到达总航班数: 23489 },
            { city: "CQU", 到达总航班数: 18203 }
            ]
            setLoveCityData(data);
        })
    }

    useEffect(() => {
        //默认设置南方航空
        getAndSetPlaneInfos();
        getAndSetPlaneTypeData("CZ");
        getAndSetLoveCityData("CZ");
    },[])

    const onFormSubmit = (queryData) => {
        console.log(queryData);
        setChartName(`${getCompanyNameByCode(queryData.company)} 详细信息`);
        getAndSetPlaneTypeData(queryData.company);
        getAndSetLoveCityData(queryData.company);
    }

    const clickPieHandler = (clickName) => {
        planeInfos.map((element, index) => {
            if (element.name === clickName) {
                setPlaneIntroduction({ name: element.name, introduction: element.introduction });
                return;
            }
        })
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航空公司相关信息" routes={routes} />
            <div className="ab-container">
                <InputTable onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <div className="ab-chart-title">{chartName}</div>
                    <Row gutter={[16, 8]}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <CompanyLoveCountriesChart data={loveCityData} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                            <div className="ab-pie-card">
                                <PlaneTypePie data={planeTypeData} isClicked={clickPieHandler} />
                                <PlaneCard content={planeIntroduction} />
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
}

export default FlightCompanyInfo;