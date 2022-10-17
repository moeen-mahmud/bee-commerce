import {
  CheckCircleFilled,
  DeleteFilled,
  PlusOutlined,
  ShoppingFilled,
} from '@ant-design/icons';
import { Button, Card, Skeleton, Space } from 'antd';
import SearchUi from '../search-ui/search-ui.shared';
import styles from './product-box.shared.module.less';
export function ProductBox({
  categoryStatus,
  products,
  onSearch,
  isSearching,
  isCategory,
  toggleCategory,
  addToCart,
  removeFromCart,
  cart = [],
}) {
  const { Meta } = Card;

  return (
    <div className={styles['container']}>
      <section>
        <h1>Explore Products</h1>
        <h4>Choose categories from above</h4>
        <SearchUi
          onSearch={onSearch}
          isCategory={isCategory}
          toggleCategory={toggleCategory}
        />
        <Space wrap size={30}>
          {categoryStatus === 'idle' || isSearching ? (
            <>
              {new Array(10).fill(null).map((_, index) => (
                <Card
                  key={index + 1}
                  hoverable
                  style={{ width: 300, height: 450 }}
                  cover={<Skeleton.Image active />}
                >
                  <Skeleton.Input size="large" active />
                  <Skeleton.Input size="default" active />
                  <Skeleton.Input size="large" active />
                </Card>
              ))}
            </>
          ) : (
            <>
              {products
                .filter((product) => product.images[0] !== '')
                .map((product) => (
                  <Card
                    key={product.id}
                    hoverable
                    style={{ width: 300, height: 450 }}
                    cover={<img alt={product.name} src={product.images?.[0]} />}
                  >
                    <Meta
                      title={product.title}
                      description={product.description}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '250px',
                      }}
                    >
                      <Meta title={`Price ${product.price}`} />
                      {cart.map((item) => item.id).includes(product.id) ? (
                        <Button
                          onClick={() => removeFromCart(product.id)}
                          type="default"
                          icon={<DeleteFilled style={{ color: 'red' }} />}
                        >
                          Remove from cart
                        </Button>
                      ) : (
                        <Button
                          onClick={() => addToCart(product.id)}
                          type="default"
                          icon={<ShoppingFilled />}
                        >
                          Add To Cart
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
            </>
          )}
          {products.length === 0 && !isSearching ? (
            <h1>No products found</h1>
          ) : null}
        </Space>
      </section>
    </div>
  );
}
export default ProductBox;
