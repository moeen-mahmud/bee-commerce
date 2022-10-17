import {
  LoginComponent,
  RegisterComponent,
} from '@bee-commerce/bee-commerce/components';
import { useState } from 'react';
import styles from './login.page.module.less';
export function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles['container']}>
      {isLogin ? (
        <LoginComponent setIsLogin={setIsLogin} />
      ) : (
        <RegisterComponent setIsLogin={setIsLogin} />
      )}
    </div>
  );
}
export default LoginPage;
