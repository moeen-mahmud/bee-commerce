import { Card, Skeleton, Space } from 'antd';
import styles from './category-box.shared.module.less';
export function CategoryBox({
  categories,
  selectedCategory,
  setSelectedCategory,
  categoryStatus,
}) {
  const { Meta } = Card;

  return (
    <div className={styles['container']}>
      <h1>Explore Categories</h1>
      <Space wrap align="center" size={30}>
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
              </Card>
            ))}
          </>
        ) : (
          <>
            {categories.map((category) => (
              <Card
                onClick={() => setSelectedCategory(category.id)}
                key={category.id}
                hoverable
                bodyStyle={
                  selectedCategory === category.id
                    ? { borderBottom: '5px solid #1890ff' }
                    : {}
                }
                style={{ width: 240 }}
                cover={<img alt={category.name} src={category.image} />}
              >
                <Meta title={category.name} />
              </Card>
            ))}
          </>
        )}
      </Space>
    </div>
  );
}

export default CategoryBox;
