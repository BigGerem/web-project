import React from 'react';
import { Input, Form } from 'antd';
import { useFormik } from 'formik';
const MyTextInput = ({ label, ...props }) => {
    const formik = useFormik({
      initialValues: { [props.name]: '' },
      validate: (values) => {
        const errors = {};
        if (!values[props.name]) {
          errors[props.name] = `Будь ласка, введіть ${label.toLowerCase()}!`;
        }
        return errors;
      },
    });
  
    const field = formik.getFieldProps(props.name);
  
    return (
      <Form.Item
        label={label}
        hasFeedback
        validateStatus={formik.touched[props.name] && formik.errors[props.name] ? 'error' : ''}
        help={formik.touched[props.name] && formik.errors[props.name]}
      >
        <Input {...field} {...props} />
      </Form.Item>
    );
  };
  export default MyTextInput;