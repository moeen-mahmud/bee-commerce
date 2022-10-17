import { Button, Card, Form, Input, Space, Typography } from 'antd';
import styles from './register.component.module.less';
export function RegisterComponent({ form, onSubmit, setIsLogin }) {
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
              <Button htmlType="submit" onClick={onSubmit}>
                Sign Up
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default RegisterComponent;
