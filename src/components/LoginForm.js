// LoginForm.js
import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const LoginForm = ({ visible, onCancel, onLogin }) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (values) => {
    setLoading(true);
    onLogin();
    setLoading(false);
    onCancel();
  };
  return (
    <Modal
      title="Увійти"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={handleLogin}>
        <Form.Item
          label="Логін"
          name="username"
          rules={[{ required: true, message: 'Будь ласка, введіть логін!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Будь ласка, введіть пароль!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Увійти
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default LoginForm;
