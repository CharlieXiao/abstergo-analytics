import { Form, Button, DatePicker, Row, Col } from "antd";
import React from "react";
import CitySelector from "./citySelector";
// 导入地区
import locale from "antd/es/date-picker/locale/zh_CN";

const { RangePicker } = DatePicker;

const CityMonthForm = ({ onFormSubmit }) => {
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
        start: values.month[0].format("YYYY-MM"),
        end: values.month[1].format("YYYY-MM")
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
                  picker="month"
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

export default CityMonthForm;
