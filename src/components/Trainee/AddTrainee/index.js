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

class AddTrainee extends Component {
  render() {
    const onFinish = (values) => {
        fetch('http://localhost:8080/trainees', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: values.trainee.name,
            office: values.trainee.office,
            email: values.trainee.email,
            zoomId: values.trainee.zoomId,
            github: values.trainee.github,
          }),
        }).then((res) => {
          if (res.status === 201) {
            alert('添加成功');
            window.history.go(-1);
          } else alert('添加失败');
        });
    };
    return (
      <div class="addTrainee">
        <h1 className="title">添加学员</h1>
        <Form
          {...layout}
          name="messages"
          onFinish={onFinish}
          className="add-trainee"
        >
          <Form.Item
            name={['trainee', 'name']}
            label="姓名"
          >
          <Input />
          </Form.Item>
          <Form.Item
            name={['trainee', 'office']}
            label="办公室"
          >
           <Input />
           </Form.Item>
          <Form.Item
            name={['trainee', 'email']}
            label="邮箱"
          >
           <Input />
           </Form.Item>
          <Form.Item
            name={['trainee', 'zoomId']}
            label="Zoom ID"
          >
           <Input />
           </Form.Item>
          <Form.Item
            name={['trainee', 'github']}
            label="Github 账号"
          >
           <Input />
           </Form.Item>
          <Form.Item class="btn">
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

export default AddTrainee;