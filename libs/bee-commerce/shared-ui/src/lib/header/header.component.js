import styles from './header.module.less';
import { Col, Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Header(props) {
  const { Header } = Layout;
  const navigate = useNavigate();

  // products menu
  const productsMenu = [
    {
      key: 'Home',
      label: 'Home',
      link: '/',
    },
    {
      key: 'products',
      label: 'Products',
      link: '/products',
    },
    {
      key: 'categories',
      label: 'Categories',
      link: '/categories',
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
            >
              {productsMenu.map((menu) => (
                <Menu.Item key={menu.key} onClick={() => navigate(menu.link)}>
                  {menu.label}
                </Menu.Item>
              ))}
            </Menu>
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
