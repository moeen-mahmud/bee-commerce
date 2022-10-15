import { Card, Skeleton, Space } from 'antd';
import { useCallback, useEffect } from 'react';
import styles from './category-component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  selectAllCategories,
} from './category-component.slice';
export function CategoryComponent(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const categoryStatus = useSelector((state) => state.categories.status);

  const { Meta } = Card;

  const fetchCategories = useCallback(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoryStatus === 'idle') {
      fetchCategories();
    }
  }, [categoryStatus, dispatch, fetchCategories]);

  return (
    <div className={styles['container']}>
      <section style={{ width: '70%' }}>
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
                  key={category.id}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={category.name} src={category.image} />}
                >
                  <Meta title={category.name} />
                </Card>
              ))}
            </>
          )}
        </Space>
      </section>
    </div>
  );
}
export default CategoryComponent;
