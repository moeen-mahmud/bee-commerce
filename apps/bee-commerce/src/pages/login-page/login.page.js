import { LoginComponent } from '@bee-commerce/bee-commerce/components';
import { Form } from 'antd';
import { useState } from 'react';
import styles from './login.page.module.less';
export function LoginPage(props) {
  const [form] = Form.useForm();
  const [userInputValues, setUserInputValues] = useState({});

  const handleOnSubmit = (e) => {
    form
      .validateFields()
      .then((values) => {
        setUserInputValues(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(userInputValues);

  return (
    <div className={styles['container']}>
      <LoginComponent form={form} onSubmit={handleOnSubmit} />
    </div>
  );
}
export default LoginPage;
