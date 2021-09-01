import React from "react";
import {
  Form,
  Row,
  Col,
  Input,
  label,
  Select,
  Checkbox,
  Button,
  Divider,
} from "antd";
import countryList from "react-select-country-list";
import CountrySelector from "./countrylist";
import FormItem from "antd/lib/form/FormItem";
import "./signup.css";
const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
function onBlur() {
  console.log("blur");
}
const Signup = () => {
  return (
    <div>
      <div className="bgimg">
        <div className="layer">
          <div className="mainsection">
            <div className="register-tag">
              <p className="h1">
                Register
                <span className="aqua">Now</span>
              </p>
            </div>
            <div className="signupForm">
              <Form>
                <Row className="mainSection1" gutter={32}>
                  <Col gutter={32}>
                    <Row>
                      <Col span={24}
                        style={{ paddingleft: "16px", paddingRight: "16px" }}>
                        <h1>Company Details</h1>
                      </Col>
                      </Row>
                      <Row>
                      <Col span={24}
                        style={{ paddingleft: "16px", paddingRight: "16px" }}>
                        <p className="aqua">
                          Provide your compnay details below and access the
                          world's most innovative market plateform
                        </p>
                      </Col>
                    </Row>
                    <Row className="register_Class_R1">
                      <Col md={12} sm={24} lg={12}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              placeholder="Company Name"
                              name="Companyname"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your company!",
                                  whitespace: false,
                                },
                              ]}>
                              <Input placeholder="Company Name" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={12} sm={24} lg={12}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="ACN/ABN"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your ACN/ABN!",
                                  whitespace: false,
                                },
                              ]}>
                              <Input placeholder="ACN/ABN" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={24} sm={24} lg={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="taxnumber"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your tax number!",
                                  whitespace: false,
                                },
                              ]}>
                              <Input placeholder="Tax Numer" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="country"
                              rules={[
                                {
                                  required: true,
                                  message: "Please select the country!",
                                  whitespace: false,
                                },
                              ]}>
                              <CountrySelector placeholder="Select Country"/>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={24} md={24} sm={24}>
                        <Row className="domain-input">
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="DomainName"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Domain Name!",
                                  whitespace: false,
                                },
                              ]}>
                              <Input placeholder="Domain Name" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={24} md={24} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="adress1"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your adress2!",
                                  whitespace: true,
                                },
                              ]}>
                              <Input  placeholder="Adress Line 1"/>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="adress2"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your adress2!",
                                  whitespace: true,
                                },
                              ]}>
                              <Input placeholder="Adress Line 2"/>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={8} md={8} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="Suburb"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input Suburb",
                                  whitespace: false,
                                },
                              ]}>
                              <Input  placeholder="Sub Urb"/>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={8} md={8} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="State"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your state",
                                  whitespace: true,
                                },
                              ]}>
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={8} md={8} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="taxnumber"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your tax number!",
                                  whitespace: true,
                                },
                              ]}>
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <FormItem>
                              <Select
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                  option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }>
                                <Option value="jack">Urea</Option>
                                <Option value="lucy">Machine</Option>
                                <Option value="tom">Technology</Option>
                              </Select>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <FormItem>
                              <Select
                                showSearch
                                placeholder=""
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                  option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }>
                                <Option value="jack">Urea</Option>
                                <Option value="lucy">Machine</Option>
                                <Option value="tom">Technology</Option>
                              </Select>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mainSection1" gutter={32}>
                  <Col gutter={32}>
                    <Row>
                      <Col
                        style={{ paddingleft: "16px", paddingRight: "16px" }}
                        span={24}>
                        <h1>Company Details</h1>
                      </Col>
                      </Row>
                      <Row>
                      <Col
                        style={{ paddingleft: "16px", paddingRight: "16px" }}
                        span={24}>
                        <p className="aqua">
                          please provide details of Administrator and initial
                          user of Connekta. This will be responsible for
                          assisting in the setup of company details, provide
                          access to other users within his/her company.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} sm={24} md={12}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <FormItem>
                              <Input></Input>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={12} md={12} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <FormItem>
                              <Input></Input>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={24} lg={24} sm={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name={["user", "email"]}
                              rules={[{ type: "email" }]}>
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item
                              name="country"
                              rules={[
                                {
                                  required: true,
                                  message: "Please select the country!",
                                  whitespace: true,
                                },
                              ]}>
                              <CountrySelector />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <FormItem>
                              <Input></Input>
                            </FormItem>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{ paddingleft: "16px", paddingRight: "16px" }}
                        span={24}>
                        <Form.Item
                          name="agreement"
                          valuePropName="checked"
                          rules={[
                            {
                              validator: (_, value) =>
                                value
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      new Error("Should accept agreement")
                                    ),
                            },
                          ]}>
                          <Checkbox>
                            <label>
                              <span>
                                By clicking the "Register" button, you are
                                creating a Connekta account, and you agree to
                                Connekta <span>Terms of Use</span>
                                and <span>Privacy Policy</span>.
                              </span>
                            </label>
                          </Checkbox>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} sm={24} lg={12}>
                        <Row>
                          <Col
                            style={{
                              paddingleft: "16px",
                              paddingRight: "16px",
                            }}
                            span={24}>
                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Register
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>

                      <Col sm={24} md={12} lg={24}>
                        <p>
                          Already have an account?
                          <spn>login</spn>
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
