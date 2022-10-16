import { useCallback, useEffect, useState } from 'react';
import styles from './category-component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllProducts,
  selectAllCategories,
  categoryActions,
  selectProductByCategory,
  selectAllProducts,
} from './category-component.slice';
import { CategoryBox, ProductBox } from '@bee-commerce/bee-commerce/shared-ui';
export function CategoryComponent(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectProductByCategory);
  const categoryStatus = useSelector((state) => state.categories.status);
  const [selectedCategory, setSelectedCategory] = useState(1);
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
        <CategoryBox
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categoryStatus={categoryStatus}
        />
        <ProductBox
          categoryStatus={categoryStatus}
          products={selectedProducts}
        />
      </section>
    </div>
  );
}
export default CategoryComponent;
