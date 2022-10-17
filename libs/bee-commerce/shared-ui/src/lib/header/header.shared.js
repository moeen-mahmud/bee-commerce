import styles from './header.module.less';
import { Col, Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export function Header({ token, logOut, cart = [], cartToggler }) {
  const { Header } = Layout;
  const navigate = useNavigate();

  const loginMenu = [
    {
      key: token ? 'logout' : 'login',
      label: token ? 'Logout' : 'Login',
      icon: <UserOutlined style={{ fontSize: '1rem' }} />,
      onclick: token ? logOut : () => navigate('/login'),
    },
    {
      key: 'cart',
      label: 'Cart',
      icon: <ShoppingCartOutlined style={{ fontSize: '1rem' }} />,
      onclick: () => cartToggler(),
    },
  ];

  return (
    <div>
      <Header
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          zIndex: 1000,
          width: '100%',
        }}
      >
        <Row>
          <Col span={8}>
            <h1 onClick={() => navigate('/')} className={styles['logo']}>
              Bee Commerce
            </h1>
          </Col>
          <Col span={8}></Col>
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
                  icon: menu.icon,
                  label: menu.label,
                  onClick: menu.onclick,
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
