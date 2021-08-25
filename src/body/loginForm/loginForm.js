import React from "react";
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
