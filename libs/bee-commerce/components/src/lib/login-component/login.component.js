import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './login.component.module.less';
import { loginUser } from './login.component.slice';
export function LoginComponent({ setIsLogin }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginStatus === 'succeeded') {
      setLoading(false);
    }
  }, [loginStatus, navigate]);

  const handleUserLogin = (e) => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        dispatch(loginUser(values));
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles['container']}>
      <Card
        hoverable
        style={{ cursor: 'default', width: '400px' }}
        title="Log In"
        headStyle={{ textAlign: 'center', fontSize: '1.5rem' }}
      >
        <Form form={form} layout="vertical" size={'large'}>
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
            <Input placeholder="Enter your email" />
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
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Space size={10} direction="vertical">
              <Typography.Link onClick={() => setIsLogin(false)}>
                Don't have an account?
              </Typography.Link>
              <Button
                loading={loading}
                disabled={loading}
                htmlType="submit"
                onClick={handleUserLogin}
              >
                Sign In
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default LoginComponent;
