import { Form, Input, Button, Select, DatePicker } from 'antd';
import React from 'react'
import CitySelector from './citySelector'

const { RangePicker } = DatePicker;
const { Option } = Select;
// 表单布局
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const InputTable = () => {
  // 获取表单数据信息
  const [form] = Form.useForm();

  // 数据变化回调函数

  // const onCityChange = value=>{
  //   form.setFieldsValue()
  // }

  const onDeptCityChange = value => {
    form.setFieldsValue({
      dep_city: value
    })
  }

  const onArrCityChange = value => {
    form.setFieldsValue({
      arr_city: value
    })
  }

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="ab-form-container">
      <Form form={form} 
            // 表单名称
            name="cityminprice" 
            // 结束回调函数
            onFinish={onFinish} 
            layout="inline" 
            // 隐藏必须输入标记
            hideRequiredMark>
        <Form.Item name="dep_city" label="出发城市" rules={[{ required: true }]}>
          <CitySelector formDataChange={onDeptCityChange} />
        </Form.Item>
        <Form.Item name="arr_city" label="目的城市" rules={[{ required: true }]}>
          <CitySelector formDataChange={onArrCityChange} />
        </Form.Item>
        <Form.Item name="month" label="日期范围" rules={[{ required: true }]}>
          {/* 日期范围选择器 */}
          <RangePicker picker="month" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputTable