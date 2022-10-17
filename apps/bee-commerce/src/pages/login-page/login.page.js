import {
  LoginComponent,
  RegisterComponent,
} from '@bee-commerce/bee-commerce/components';
import { useState } from 'react';
import styles from './login.page.module.less';
export function LoginPage(props) {
  // const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);
  // const [userLoginValues, setUserLoginValues] = useState({});
  // const [userRegisterValues, setUserRegisterValues] = useState({});

  // const handleUserLogin = (e) => {
  //   form
  //     .validateFields()
  //     .then((values) => {
  //       setUserLoginValues(values);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleUserRegistration = (e) => {
  //   form
  //     .validateFields()
  //     .then((values) => {
  //       setUserRegisterValues(values);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className={styles['container']}>
      {isLogin ? (
        <LoginComponent
          setIsLogin={setIsLogin}
          // form={form}
          // onSubmit={handleUserLogin}
        />
      ) : (
        <RegisterComponent
          setIsLogin={setIsLogin}
          // form={form}
          // onSubmit={handleUserRegistration}
        />
      )}
    </div>
  );
}
export default LoginPage;
