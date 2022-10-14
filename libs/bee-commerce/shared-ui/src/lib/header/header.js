import styles from './header.module.less';
import { Layout } from 'antd';

export function Header(props) {
  const { Header } = Layout;

  return (
    <div className={styles['container']}>
      <Header color="primary" />
    </div>
  );
}
export default Header;
