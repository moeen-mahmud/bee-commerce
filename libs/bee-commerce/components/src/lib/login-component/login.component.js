import { Button, Card, Form, Input, Space, Switch, Typography } from 'antd';
import styles from './login.component.module.less';
export function LoginComponent({ onSubmit, form }) {
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
              <Typography.Link>Don't have an account?</Typography.Link>
              <Button htmlType="submit" onClick={onSubmit}>
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
