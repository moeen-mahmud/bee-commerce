import { Card, Skeleton, Space } from 'antd';
import SearchUi from '../search-ui/search-ui.shared';
import styles from './product-box.shared.module.less';
export function ProductBox({
  categoryStatus,
  products,
  onSearch,
  isSearching,
}) {
  const { Meta } = Card;

  return (
    <div className={styles['container']}>
      <section>
        <h1>Explore Products</h1>
        <h4>Choose categories from above</h4>
        <SearchUi onSearch={onSearch} />
        <Space wrap size={30}>
          {categoryStatus === 'idle' || isSearching ? (
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
                    style={{ width: 300, height: 450 }}
                    cover={<img alt={product.name} src={product.images?.[0]} />}
                  >
                    <Meta
                      title={product.title}
                      description={product.description}
                    />
                    <Meta
                      style={{
                        position: 'absolute',
                        bottom: 0,
                      }}
                      title={
                        <h4 style={{ marginTop: 0 }}>Price ${product.price}</h4>
                      }
                    />
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
