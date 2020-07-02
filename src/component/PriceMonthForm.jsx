import { Form, Button, DatePicker, Row, Col } from "antd";
import React from "react";
// 导入地区
import locale from "antd/es/date-picker/locale/zh_CN";

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
          <Row gutter={[16,8]}>
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
                  style={{maxWidth:"230px"}}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={24} xxl={6}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>
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

export default PriceMonthForm;
