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
    Coordinate,
    Interaction
} from 'bizcharts';
import { DataView, DataSet } from '@antv/data-set';
import axios from 'axios';
import { host } from "../../config"
import { company, getCodeByCompanyName, getCompanyNameByCode } from "../../city"





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
                    return <Option value={element.comp_code} key={index}>{`${element.comp_name} ${element.comp_code}`}</Option>
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

//飞机公司饼图
const PlaneCompanyPieChart = ({ data, onClick }) => {
    // const data = [
    //     { item: '事例一', count: 40, percent: 0.4 },
    //     { item: '事例二', count: 21, percent: 0.21 },
    //     { item: '事例三', count: 17, percent: 0.17 },
    //     { item: '事例四', count: 13, percent: 0.13 },
    //     { item: '事例五', count: 9, percent: 0.09 },
    //   ];

    console.log(data);

    const cols = {
        percent: {
            formatter: val => {
                val = val * 100 + '%';
                return val;
            },
        },
    };

    return (
        <Chart height={400} data={data} scale={cols} autoFit
            onIntervalClick={ev => {
                let planeCompany = ev.data.data.item;
                //根据点击的公司画下一个饼图
                onClick(planeCompany);
            }}
        >
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={false} />
            <Axis visible={false} />
            <Interval
                position="count"
                adjust="stack"
                color="item"
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['count', {
                    content: (data) => {
                        return `${data.item}: ${Math.floor(data.percent * 100)}%`;
                    },
                }]}
                tooltip={{fields: ['item','count']}}
            />
            <Interaction type='element-single-selected' />

        </Chart>
    );
}

//某个飞机公司的具体机型饼图
const PlaneTypesPieChart = ({ data, onClick }) => {
    // const data = [
    //     { item: '事例一', count: 40, percent: 0.4 },
    //     { item: '事例二', count: 21, percent: 0.21 },
    //     { item: '事例三', count: 17, percent: 0.17 },
    //     { item: '事例四', count: 13, percent: 0.13 },
    //     { item: '事例五', count: 9, percent: 0.09 },
    //   ];
    console.log(data);
    
    const cols = {
        percent: {
            formatter: val => {
                val = val * 100 + '%';
                return val;
            },
        },
    };

    return (
        <Chart height={400} data={data} scale={cols} autoFit
            onIntervalClick={ev => {
                let plane = ev.data.data.item;
                onClick(plane);
            }}
        >
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={false} />
            <Axis visible={false} />
            <Interval
                position="count"
                adjust="stack"
                color="item"
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['count', {
                    content: (data) => {
                        if(data.percent < 0.05){
                            return "";
                        }
                        else
                            return `${data.item}: ${Math.floor(data.percent * 100)}%`;
                    },
                }]}
                tooltip={{fields: ['item','count']}}
            />
            <Interaction type='element-single-selected' />
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
        <Chart data={dv.rows} autoFit height={500}>
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
            <Card title={content.name}>
                <p>{content.introduction}</p>
            </Card>
        </>
    )
}


//页面主组件
const FlightCompanyInfo = () => {
    //const [planeTypeData, setPlaneTypeData] = useState([]); //已废弃
    const [loveCityData, setLoveCityData] = useState([]);
    const [planeInfos, setPlaneInfos] = useState([]);
    const [planeIntroduction, setPlaneIntroduction] = useState({ name: "", introduction: "" });
    //const [chartName, setChartName] = useState("");

    const [planeCompaniesAndTypes, setPlaneCompaniesAndTypes] = useState([]);
    const [planeCompanies, setPlaneCompanies] = useState([]);
    const [planesInPlaneCompanies, setPlanesInPlaneCompanies] = useState([]);
    const [selectCompanyName,setSelectCompanyName] = useState("");
    const [selectPlaneCompany,setSelectPlaneCompany] = useState("");


    /**
     * 获取并设置所有机型的以及介绍
     */
    const getAndSetPlaneInfos = () => {
        //发送axios请求获取所有机型以及介绍
        axios.get(host + "/plane/getPlanesIntroductions").then((res) => {
            if (res.data.success) {
                //收到数据的形式是{craftFamily:"波音747",craftDesc:"xxxxx"}
                let tmpInfos = res.data.data;
                console.log(tmpInfos);
                
                let infos = [];

                for (let index in tmpInfos) {
                    infos.push({ name: tmpInfos[index].craftFamily, introduction: tmpInfos[index].craftDesc });
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
     * 获取并设置航公公司所有飞机机型以及数量-----已废弃
     * @param {城市名，CKG} companyName 
     */
    // function getAndSetPlaneTypeData(companyName) {
    //     //根据companyName 进行网络请求拿到对应航空公司的机型数据
    //     //通过axios获取飞机机型信息      
    //     axios.get(host + "/company/getAircraftInfos?companyName=" + companyName).then((res) => {
    //         if (res.data.success) {
    //             let tmpData = res.data.data;
    //             let data = [];
    //             for (let index in tmpData) {
    //                 data.push({ value: tmpData[index].num, type: tmpData[index].craftCompany, name: tmpData[index].craftFamily });
    //             }
    //             setPlaneTypeData(data);
    //         } else {
    //             console.log("not success");
    //         }
    //     }).catch((e) => {
    //         alert("请求机型占比异常");
    //         let types = [
    //             { value: 251, type: '波音737', name: '波音737-1' },
    //             { value: 1048, type: '波音737', name: '波音737-2' },
    //             { value: 610, type: '波音747', name: '波音747-1' },
    //             { value: 434, type: '波音747', name: '波音747-2' },
    //             { value: 335, type: '空客', name: '空客A318' },
    //             { value: 250, type: '空客', name: '空客A319' },
    //         ]
    //         setPlaneTypeData(types);
    //     })
    // }

    /**
     * 获取并设置公司的偏爱城市列表
     * @param {城市名,CKG} companyName 
     */
    const getAndSetLoveCityData = (companyName) => {
        axios.get(host + "/company/getLoveCities?companyName=" + companyName).then((res) => {

            if (res.data.success) {
                let tmpData = res.data.data;
                let data = [];
                for (let index in tmpData) {
                    data.push({ city: tmpData[index].ct, 到达总航班数: tmpData[index].count });
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


    /**
     * 获取某个航空公司的飞机公司占比以及飞机公司内型号的占比
     */
    const getAndSetPlaneCompaniesAndTypes = (companyName) => {

        //这里的data需要通过axios请求获取

        axios.get(host + "/planes/getPlaneCompanyAndTypesInfo?companyName=" + companyName).then((res) => {
            if (res.data.success) {
                let data = res.data.data;
                setPlaneCompaniesAndTypes(data);
                plotCompanyPieChartAndPlaneTypeChart(data);
            } else {
                alert(res.data.msg);
            }
        }).catch((e) => {
            alert("请求航空公司的飞机公司占比以及飞机公司内型号的占比失败")
            let data = [
                { item: "波音公司", count: 50, percent: 0.5, planes: [{ item: "波音737", count: 30, percent: 0.3 }, { item: "波音787", count: 70, percent: 0.7 }] },
                { item: "空客公司", count: 50, percent: 0.5, planes: [{ item: "空客319", count: 70, percent: 0.7 }, { item: "波音787", count: 30, percent: 0.3 }] }
            ];
            setPlaneCompaniesAndTypes(data);
            plotCompanyPieChartAndPlaneTypeChart(data);
        })


    }

    /**
     * 根据总数据画出第一个饼图和第二个饼图和卡片
     * @param {planeCompaniesAndTypes，是请求的到的总数据} data 
     */
    const plotCompanyPieChartAndPlaneTypeChart = (data) => {
        //根据data先画出飞机公司占比图
        let planeCompanies = [];
        for (let index in data) {
            planeCompanies.push({ item: data[index].item, count: data[index].count, percent: data[index].percent });
        }
        setPlaneCompanies(planeCompanies);
        
        //再默认选择第一个公司，画出第一个公司的飞机机型占比图
        setSelectPlaneCompany(data[0].item);
        setPlanesInPlaneCompanies(data[0].planes);

        //设置卡片
        setPlaneIntroduction({ name: "点击饼图查看飞机详细信息", introduction: ""});
       

    }



    const companyPieClickHandler = (companyName) => {
        setSelectPlaneCompany(companyName);
        for (let index in planeCompaniesAndTypes) {
            if (planeCompaniesAndTypes[index].item === companyName) {
                setPlanesInPlaneCompanies(planeCompaniesAndTypes[index].planes);
            }
        }
    }

    const planesPieHandler = (planeName) => {
        console.log(planeInfos);

        for (let index in planeInfos) {
            if (planeInfos[index].name === planeName) {
                setPlaneIntroduction({ name: planeInfos[index].name, introduction: planeInfos[index].introduction });
                return;
            }
        }

    }


    useEffect(() => {
        //默认设置南方航空
        getAndSetPlaneInfos();
        setSelectCompanyName(getCompanyNameByCode("CZ"));
        //getAndSetPlaneTypeData("CZ");
        getAndSetLoveCityData("CZ");
        getAndSetPlaneCompaniesAndTypes("CZ");
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData);
        setSelectCompanyName(getCompanyNameByCode(queryData.company));
        //getAndSetPlaneTypeData(queryData.company);
        getAndSetLoveCityData(queryData.company);
        getAndSetPlaneCompaniesAndTypes(queryData.company);
    }



    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="航空公司相关信息" routes={routes} />
            <div className="ab-container">
                <InputTable onFormSubmit={onFormSubmit} />
                {/* <div className="ab-content-container">
                    <div className="ab-chart-title">{selectCompanyName+"的详细信息"}</div> */}
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={24} xxl={24}>
                            <Card title={selectCompanyName+"最爱城市排名"}>
                                <CompanyLoveCountriesChart data={loveCityData} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={9} >
                            <Card title={selectCompanyName+"持有飞机公司占比"}>
                                <PlaneCompanyPieChart data={planeCompanies} onClick={companyPieClickHandler} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={9} >
                            <Card title={selectCompanyName+"拥有"+selectPlaneCompany+"的机型占比"}>
                                <PlaneTypesPieChart data={planesInPlaneCompanies} onClick={planesPieHandler} />
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={4} xxl={6}>
                            <PlaneCard content={planeIntroduction} />
                        </Col>

                    </Row>

                {/* </div> */}
            </div>
        </div>
    );
}

export default FlightCompanyInfo;