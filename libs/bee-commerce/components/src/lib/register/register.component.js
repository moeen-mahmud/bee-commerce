import { Alert, Button, Card, Form, Input, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { registerUser } from './register.component.slice';
import styles from './register.component.module.less';
import { useDispatch, useSelector } from 'react-redux';
export function RegisterComponent({ setIsLogin }) {
  // hooks
  const [form] = Form.useForm();

  // redux
  const dispatch = useDispatch();
  const registeredUserStatus = useSelector((state) => state.user.status);

  // local state
  const [loading, setLoading] = useState(false);

  // register user
  const handleUserRegistration = async (e) => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      if (values) {
        dispatch(registerUser(values));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // watch registration status
  useEffect(() => {
    if (
      registeredUserStatus === 'succeeded' ||
      registeredUserStatus === 'error'
    ) {
      setLoading(false);
    }
  }, [registeredUserStatus]);

  return (
    <div className={styles['container']}>
      <Card
        hoverable
        style={{ cursor: 'default', width: '400px' }}
        title="Register"
        headStyle={{ textAlign: 'center', fontSize: '1.5rem' }}
      >
        <Form form={form} layout="vertical" size={'large'}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter avatar url',
              },
              {
                type: 'url',
                message: 'The input is not valid URL!',
              },
            ]}
            label="Avatar"
            name="avatar"
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your name',
              },
              {
                type: 'string',
                message: 'The input is not valid name',
              },
              {
                min: 3,
                message: 'The name must be at least 3 characters',
              },
            ]}
            label="Name"
            name="name"
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
            label="Email"
            name="email"
            colon={false}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
            label="Password"
            name="password"
            colon={false}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Space size={10} direction="vertical">
              <Typography.Link onClick={() => setIsLogin(true)}>
                Already have an account?
              </Typography.Link>
              <Button
                loading={loading}
                disabled={loading}
                htmlType="submit"
                onClick={handleUserRegistration}
              >
                Sign Up
              </Button>
            </Space>
          </Form.Item>
        </Form>
        {registeredUserStatus === 'succeeded' && (
          <Card.Meta
            title={
              <Alert
                message="Registered Successfully"
                description="Your account has been created successfully"
                type="success"
                showIcon
                closable
              />
            }
          />
        )}
        {registeredUserStatus === 'failed' && (
          <Card.Meta
            title={
              <Alert
                message="Registration Failed"
                description="There was an error while creating your account"
                type="error"
                showIcon
                closable
              />
            }
          />
        )}
      </Card>
    </div>
  );
}
export default RegisterComponent;
