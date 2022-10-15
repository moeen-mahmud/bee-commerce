import { Card, Space } from 'antd';
import styles from './category-component.module.less';
export function CategoryComponent(props) {
  const { Meta } = Card;

  return (
    <div className={styles['container']}>
      <section style={{ width: '70%' }}>
        <h1>Explore Categories</h1>
        <Space wrap align="center" size={30}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return (
              <Card
                key={key}
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            );
          })}
        </Space>
      </section>
    </div>
  );
}
export default CategoryComponent;
