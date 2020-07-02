import React, { useState, useEffect } from 'react'
import PageHeader from '../../component/pageheader'
// import CityDayForm from '../../component/CityDayForm'
import { Skeleton } from 'antd'
import { Chart, Line, Point,Tooltip } from 'bizcharts';
import { Form, Button, DatePicker, Row, Col } from "antd";
import CitySelector from "../../component/citySelector";
// 导入地区
import locale from "antd/es/date-picker/locale/zh_CN";
import {getCityByCode} from '../../city'

const routes = [
    {
        path: '/',
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '城市',
        menu: [{
            path: '/city/avgprice',
            title: '平均机票价格'
        }, {
            path: '/city/linenum',
            title: '航班数'
        }]
    },
    {
        breadcrumbName: '最低机票价格',
    },
];

const { RangePicker } = DatePicker;

const CityDayForm = ({ onFormSubmit }) => {
  // 获取表单数据信息
  const [form] = Form.useForm();

  // 数据变化回调函数

  const onDeptCityChange = (value) => {
    form.setFieldsValue({
      dep_city: value,
    });
    form.validateFields(["dep_city"]);
  };

  const onArrCityChange = (value) => {
    form.setFieldsValue({
      arr_city: value,
    });
    // 数据输入完成后验证数据
    form.validateFields(["arr_city"]);
  };

  const onFinish = (values) => {
    console.log(values);
    console.log();
    if (onFormSubmit) {
      const data = {
        dep: values.dep_city,
        arr: values.arr_city,
        start: values.month[0].format("YYYY-MM-DD"),
        end: values.month[1].format("YYYY-MM-DD")
      }
      console.log(data)
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
          <Row gutter={[16,8]}>
            <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
              <Form.Item
                name="dep_city"
                label="出发城市"
                rules={citySelectRules}
              >
                <CitySelector formDataChange={onDeptCityChange} />
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
              <Form.Item
                name="arr_city"
                label="目的城市"
                rules={citySelectRules}
              >
                <CitySelector formDataChange={onArrCityChange}/>
              </Form.Item>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={6}>
              <Form.Item
                name="month"
                label="日期范围"
                rules={[{ required: true, message: "请选择日期范围" }]}
              >
                {/* 日期范围选择器 */}
                <RangePicker
                //   picker="month"
                  locale={locale}
                  style={{maxWidth:"230px"}}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={24} xxl={6}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>
                  查询
                </Button>
                <Button htmlType="button" onClick={onReset} style={{marginLeft:"10px"}} >
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

const CityMinPrice = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [chartName,setChartName] = useState("")
    // 初始状态默认图表
    useEffect(() => {
        const res = [
            { date: '2020-05-01', price: 1500, line: '厦门航空MF8509' },
            { date: '2020-05-02', price: 1624, line: '南方航空CZ3393' },
            { date: '2020-05-03', price: 1190, line: '南方航空CZ3157' },
            { date: '2020-05-04', price: 1500, line: '南方航空CZ3157' },
            { date: '2020-05-05', price: 1610, line: '四川航空3U8742' },
            { date: '2020-05-06', price: 2030, line: '深圳航空ZH9431' },
            { date: '2020-05-07', price: 1210, line: '四川航空3U8547' },
            { date: '2020-05-08', price: 1050, line: '吉祥航空HO1275' },
            { date: '2020-05-09', price: 1130, line: '海南航空HU7956' },
            { date: '2020-05-10', price: 1610, line: '东方航空MU5431' },
            { date: '2020-05-11', price: 1780, line: '深圳航空ZH9428' },
            { date: '2020-05-12', price: 2100, line: '上海航空FM9549' },
        ]
        setData(res)
        setLoading(false)
    }, [])

    const onFormSubmit = (queryData) => {
        console.log(queryData)
        setLoading(true)
        setTimeout(() => {
            const res = [
                { date: '2020-05-01', price: 1500, line: '厦门航空MF8509' },
                { date: '2020-05-02', price: 1624, line: '南方航空CZ3393' },
                { date: '2020-05-03', price: 1190, line: '南方航空CZ3157' },
                { date: '2020-05-04', price: 1500, line: '南方航空CZ3157' },
                { date: '2020-05-05', price: 1610, line: '四川航空3U8742' },
                { date: '2020-05-06', price: 2030, line: '深圳航空ZH9431' },
                { date: '2020-05-07', price: 1210, line: '四川航空3U8547' },
                { date: '2020-05-08', price: 1050, line: '吉祥航空HO1275' },
                { date: '2020-05-09', price: 1130, line: '海南航空HU7956' },
                { date: '2020-05-10', price: 1610, line: '东方航空MU5431' },
                { date: '2020-05-11', price: 1780, line: '深圳航空ZH9428' },
                { date: '2020-05-12', price: 2100, line: '上海航空FM9549' },
            ]
            console.log(queryData)
            const title = `${getCityByCode(queryData.dep)} - ${getCityByCode(queryData.arr)} 最低价格折线图`
            setChartName(title)
            setData(res)
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="ab-page-header-wrapper">
            <PageHeader title="最低机票价格" routes={routes} />
            <div className="ab-container">
                <CityDayForm onFormSubmit={onFormSubmit} />
                <div className="ab-content-container">
                    <Skeleton loading={loading} active>
                        <div className="ab-chart-title">{chartName}</div>
                        <Chart
                            height={500}
                            data={data}
                            scale={{ price: { min: 500 } }}
                            autoFit
                            padding={[10, 20, 50, 40]}
                        >
                            <Line position="date*price" shape="smooth" tooltip={false} />
                            <Point position="date*price" size={5} tooltip={{ fields: ['price', 'line'] }} style={{cursor:"pointer"}}/>
                            {/* 对Tooltip详细设置 */}
                            <Tooltip showCrosshairs={true}/>
                        </Chart>

                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CityMinPrice;
