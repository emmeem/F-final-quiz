import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './index.scss';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

class Addtrainer extends Component {
  render() {
    const onFinish = (values) => {
      fetch('http://localhost:8080/trainers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.trainer.name,
        }),
      }).then((res) => {
        if (res.status === 201) {
          alert('添加成功');
          window.history.go(-1);
        } else alert('添加失败');
      });
    };
    return (
      <div>
        <h1 className="title">添加讲师</h1>
        <Form
          {...layout}
          name="messages"
          onFinish={onFinish}
          className="add-trainer"
        >
          <Form.Item
            name={['trainer', 'name']}
            label="姓名"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button type="default" className="cancel-btn">
              <Link to="/">取消</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Addtrainer;