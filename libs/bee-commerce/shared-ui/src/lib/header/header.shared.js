import styles from './header.module.less';
import { Col, Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Header(props) {
  const { Header } = Layout;
  const navigate = useNavigate();

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
    {
      key: 'cart',
      label: 'Cart',
      link: '/cart',
    },
  ];

  return (
    <div>
      <Header>
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
                  label: menu.label,
                  onClick: () => navigate(menu.link),
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
