import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Row, Col, Image } from "antd";
const Rightcom = () => {
  return (
    <div className="rightlogincolm">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}>
        <label style={{ color: "white" }}>Email</label>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}>
          <Input className="userinput" />
        </Form.Item>
        <label style={{ color: "white" }}>Passwored</label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}>
          <Input className="passworedinput" type="password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ marginLeft: "10px", color: "white" }}>
              Remember me
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                width: "100%",
                marginTop: "20px",
                backgroundColor: "#1ccad3",
              }}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </Form.Item>

          <a
            style={{ marginLeft: "10px", color: "white" }}
            className="login-form-forgot"
            href="">
            Forgot password
          </a>
        </Form.Item>
      </Form>
      <div className="formfotter">
        <p
          style={{
            marginTop: "15px",

            color: "white",
          }}>
          Do Not Have Account?
        </p>

        <div>
          <Button className="loginbtn">Register</Button>
        </div>
      </div>
    </div>
  );
};
export default Rightcom;
