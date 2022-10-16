import styles from './header.module.less';
import { Col, Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Header(props) {
  const { Header } = Layout;
  const navigate = useNavigate();

  // products menu
  const navigationMenu = [
    {
      key: 'Home',
      label: 'Home',
      onclick: () => navigate('/'),
    },
    {
      key: 'products',
      label: 'Products',
      onclick: () => navigate('/products'),
    },
  ];

  const loginMenu = [
    {
      key: 'login',
      label: 'Login',
      link: '/login',
    },
    {
      key: 'register',
      label: 'Register',
      link: '/register',
    },
  ];

  return (
    <div>
      <Header>
        <Row>
          <Col span={8}>
            <h1 className={styles['logo']}>Bee Commerce</h1>
          </Col>
          <Col span={8}>
            <Menu
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={navigationMenu.map((menu) => {
                return {
                  key: menu.key,
                  label: menu.label,
                  onClick: menu.onclick,
                };
              })}
            />
          </Col>
          <Col span={8}>
            <Menu
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={loginMenu.map((menu) => {
                return {
                  key: menu.key,
                  label: menu.label,
                };
              })}
            />
          </Col>
        </Row>
      </Header>
    </div>
  );
}
export default Header;
