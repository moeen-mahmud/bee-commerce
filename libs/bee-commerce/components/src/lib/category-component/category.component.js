import { useCallback, useEffect, useState } from 'react';
import styles from './category.component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllProducts,
  selectAllCategories,
  categoryActions,
  selectProductByCategory,
  selectAllProducts,
} from './category.component.slice';
import { CategoryBox, ProductBox } from '@bee-commerce/bee-commerce/shared-ui';
export function CategoryComponent(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectProductByCategory);
  const categoryStatus = useSelector((state) => state.categories.status);
  const isCategory = useSelector((state) => state.categories.isCategory);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  // fetch all categories
  const fetchCategories = useCallback(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  // fetch all products
  const fetchProducts = useCallback(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // fetch products by category id
  const fetchProductsCategoryById = useCallback(
    (id) => {
      dispatch(categoryActions.showProductByCategory(id));
    },
    [dispatch]
  );

  // getting all categories and products
  useEffect(() => {
    if (categoryStatus === 'idle') {
      fetchCategories();
      fetchProducts();
    }
  }, [categoryStatus, dispatch, fetchCategories, fetchProducts]);

  // getting products by default category id
  useEffect(() => {
    if (products?.length > 0) {
      fetchProductsCategoryById(selectedCategory);
    }
  }, [selectedCategory, fetchProductsCategoryById, products]);

  // getting products by category id
  const handleOnSearch = async (value) => {
    if (value === '') {
      setIsSearching(false);
      fetchProductsCategoryById(selectedCategory);
    }
    setIsSearching(true);

    const delay = (ms) =>
      new Promise((res) => {
        setTimeout(res, ms);

        clearTimeout(ms);
      });

    delay(1000).then(() => {
      dispatch(categoryActions.searchProducts(value));
      setIsSearching(false);
    });
  };

  // toggle between categories and products
  const handleToggleCategory = () => {
    dispatch(categoryActions.toggleCategory(!isCategory));
  };

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
          onSearch={handleOnSearch}
          isSearching={isSearching}
          isCategory={isCategory}
          toggleCategory={handleToggleCategory}
        />
      </section>
    </div>
  );
}
export default CategoryComponent;
