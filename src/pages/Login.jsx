import React from 'react'
import { Card, Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken, getToken } from './../utils/auth'
import './login.css'
import {loginApi} from '../api/apiIndex'

function Login(props) {
  const onFinish = values => {
    const {username, password} = values;
    // console.log('Received values of form: ', values);
    if(username.length !== 0 && password.length !== 0) {
      // api 获取
      setToken('username');
      props.history.push('/admin');
      /*
      loginApi({
        username,
        password
      }).then(res => {
        if(res.code === 0) {
          //? 登录成功
          setToken(res.token);
          props.history.push('/admin');
        }else{
          message.info(res.message);
        }
      }).catch(err=>message.error(`用户名不存在`));
      */
    }
  }
  return (
    <Card className="loginBox" title="whf dev SYS">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住登录</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
