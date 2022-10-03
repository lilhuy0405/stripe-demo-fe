import React from "react";
import "../style/RegisterPage.css";
import { Button, Checkbox, Form, Input } from "antd";
function RegisterPage() {
  return (
    <div className="bg-red-900">
      <div className="px-52 py-10">
        <div className="bg-pink-800 rounded-xl px-10 py-16">
          <h2 className="text-center text-xl pb-10">CREATE AN ACCOUNT</h2>
          <Form>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <p>Name</p>
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <p>Email </p>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <p>Password</p>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <p>Phone</p>
              <Input />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
