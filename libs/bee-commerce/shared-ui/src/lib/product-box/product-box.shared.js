import { Card, Skeleton, Space } from 'antd';
import styles from './product-box.shared.module.less';
export function ProductBox({ categoryStatus, products }) {
  const { Meta } = Card;

  return (
    <div className={styles['container']}>
      <section>
        <h1>Explore Products</h1>
        <h4>Choose categories from above</h4>
        <Space wrap size={30}>
          {categoryStatus === 'idle' ? (
            <>
              {new Array(10).fill(null).map((_, index) => (
                <Card
                  key={index + 1}
                  hoverable
                  style={{ width: 240 }}
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
                    style={{ width: 240 }}
                    cover={<img alt={product.name} src={product.images?.[0]} />}
                  >
                    <Meta
                      title={product.title}
                      description={product.description}
                    />
                    <Meta title={`Price $${product.price}`} />
                  </Card>
                ))}
            </>
          )}
        </Space>
      </section>
    </div>
  );
}
export default ProductBox;
