import React from "react";
<<<<<<< HEAD
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./loginform.css";
import logo from "./logo.svg";
import Rightcom from "./testform/rightcol";
import Leftcolm from "./testform/leftcolm";

const LoginForm = () => {
  return (
    <div className="bgimg">
      <div className="layer">
        <Row>
          <Col lg={12} md={24} sm={24}>
            <div className="leftcontainer">
              <Leftcolm />
            </div>
          </Col>
          <Col lg={12} md={24} sm={24} className="rightcol">
            <div className="rightcontainer">
              <Rightcom />
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p style={{ color: "white" }}>
            @ 2021 coneecta.com,inc.All right reserved.
            <span className="aqua">|Privacy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
=======
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const LoginForm = () => {
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    return (

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item style={{width:"100px",heigth:"60px",margin:"20px"}}
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <t>Email</t>
          <Input/>
        </Form.Item>
        <Form.Item style={{width:"100px",heigth:"60px",margin:"20px"}}
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <t>Password</t>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Form.Item 
           name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
          <Button className="loginbtn"
          type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        
      </Form>
    );
  };
  export default LoginForm

>>>>>>> d4fdc8a69786470cb71b1b422500e0a70a5a11ca
