import {
  Alert,
  Button,
  Card,
  Drawer,
  Image,
  List,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cart-box.shared.module.less';
export function CartBox({
  onClose,
  open,
  cart = [],
  columns = [],
  grandTotal,
  placeOrder,
  placeOrderStatus,
  token,
}) {
  return (
    <div className={styles['container']}>
      <Drawer
        closable={false}
        title={<Typography.Title level={3}>View Cart</Typography.Title>}
        placement="left"
        onClose={onClose}
        open={open}
      >
        {placeOrderStatus === 'success' ? (
          <section>
            <Alert
              message="Order Placed Successfully"
              description="Your order has been placed successfully. You will receive an email shortly. Thank you for shopping with us."
              type="success"
              showIcon
            />
          </section>
        ) : (
          <section>
            {cart.length > 0 ? (
              <React.Fragment>
                <Typography.Title level={4}>
                  Items in Cart{' '}
                  <Typography.Text type="success">
                    {cart.length}
                  </Typography.Text>
                </Typography.Title>
                <section>
                  <List
                    header={<h3>Review Order</h3>}
                    footer={
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Typography.Text strong>Grand Total</Typography.Text>
                        <Typography.Text strong>${grandTotal}</Typography.Text>
                      </div>
                    }
                  >
                    {columns.map((column) => (
                      <List.Item key={column.key}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <Typography.Text>{column.title}</Typography.Text>
                          <Typography.Text>
                            ${column.calculations}
                          </Typography.Text>
                        </div>
                      </List.Item>
                    ))}
                  </List>
                </section>
                <Typography.Title style={{ marginTop: '1.5rem' }} level={4}>
                  Review Items
                </Typography.Title>
                <Space size={10} direction="vertical">
                  {cart.map((item) => (
                    <Card
                      size="small"
                      title={
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Typography.Text>{item.title}</Typography.Text>
                          <Typography.Text type="success">
                            Price: ${item.price}
                          </Typography.Text>
                        </div>
                      }
                      // extra={<a href="#">More</a>}
                      style={{ width: 300 }}
                    >
                      <Image src={item.images?.[0]} />
                    </Card>
                  ))}
                </Space>
                <div style={{ marginTop: '1rem', width: '100%' }}>
                  {token ? (
                    <Button
                      loading={placeOrderStatus === 'idle'}
                      disabled={placeOrderStatus === 'idle'}
                      onClick={placeOrder}
                      block
                      type="primary"
                    >
                      Place Order
                    </Button>
                  ) : (
                    <Alert
                      message="You need to login to place order"
                      description={
                        <Link to={'/login'}>
                          <Typography.Link>
                            Take me to the login
                          </Typography.Link>
                        </Link>
                      }
                      type="warning"
                      showIcon
                    />
                  )}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography.Title type="warning" level={4}>
                  Cart is empty
                </Typography.Title>
                <Typography.Text type="secondary">
                  Add items to your cart to view them here
                </Typography.Text>
              </React.Fragment>
            )}
          </section>
        )}
      </Drawer>
    </div>
  );
}
export default CartBox;
