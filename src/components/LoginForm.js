import React from 'react';
import { Modal, Form, Button } from 'antd';
import { useFormik } from 'formik';
import MyTextInput from './FormikComp/MyTextInput';


const LoginForm = ({ visible, onCancel, onLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      onLogin(values);
      onCancel();
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Будь ласка, введіть логін!';
      }
      if (!values.password) {
        errors.password = 'Будь ласка, введіть пароль!';
      }
      return errors;
    },
  });

  return (
    <Modal
      title="Увійти"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form onFinish={formik.handleSubmit}>
        <MyTextInput
          label="Логін"
          name="username"
          type="text"
        />
        <MyTextInput
          label="Пароль"
          name="password"
          type="password"
        />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={formik.isSubmitting}>
            Увійти
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginForm;

