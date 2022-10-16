import { Card, Col, Row, Skeleton, Space } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import styles from './category-component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllProducts,
  // getByCategoryId,
  selectAllCategories,
  categoryActions,
  selectProductByCategory,
  selectAllProducts,
} from './category-component.slice';
export function CategoryComponent(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectProductByCategory);
  const categoryStatus = useSelector((state) => state.categories.status);
  const [selectedCategory, setSelectedCategory] = useState(1);

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

  useEffect(() => {
    if (products.length > 0) {
      fetchProductsCategoryById(selectedCategory);
    }
  }, [selectedCategory, fetchProductsCategoryById, products]);

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
        <section style={{ marginTop: '4rem' }}>
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
                {selectedProducts
                  .filter((product) => product.images[0] !== '')
                  .map((product) => (
                    <Card
                      key={product.id}
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img alt={product.name} src={product.images?.[0]} />
                      }
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
      </section>
    </div>
  );
}
export default CategoryComponent;
