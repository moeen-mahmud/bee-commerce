import { Card, Skeleton, Space } from 'antd';
import { useCallback, useEffect } from 'react';
import styles from './category-component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllProducts,
  getByCategoryId,
  selectAllCategories,
  categoryActions,
  selectProductByCategory,
  // selectAllProducts,
} from './category-component.slice';
export function CategoryComponent(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  // const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectProductByCategory);
  const categoryStatus = useSelector((state) => state.categories.status);

  const { Meta } = Card;

  const fetchCategories = useCallback(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const fetchProducts = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const fetchProductsCategoryById = useCallback(
    (id) => {
      dispatch(categoryActions.showProductByCategory(id));
    },
    [dispatch]
  );

  useEffect(() => {
    if (categoryStatus === 'idle') {
      fetchCategories();
      fetchProducts();
    }
  }, [categoryStatus, dispatch, fetchCategories, fetchProducts]);

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
                  onClick={() => fetchProductsCategoryById(category.id)}
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
        <section style={{ marginTop: '2rem', width: '70%' }}>
          <h1>Explore Products</h1>
        </section>
      </section>
    </div>
  );
}
export default CategoryComponent;
