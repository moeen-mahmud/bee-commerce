import { useCallback, useEffect, useState } from 'react';
import styles from './store.component.module.less';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllProducts,
  selectAllCategories,
  storeActions,
  selectProductByCategory,
  selectAllProducts,
} from './store.component.slice';
import {
  CartBox,
  CategoryBox,
  ProductBox,
} from '@bee-commerce/bee-commerce/shared-ui';
export function StoreComponent(props) {
  // redux
  const dispatch = useDispatch();
  // categories selector
  const categories = useSelector(selectAllCategories);
  // products selector
  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectProductByCategory);

  // common store selectors
  const categoryStatus = useSelector((state) => state.store.status);
  const showCart = useSelector((state) => state.store.showCart);
  const cart = useSelector((state) => state.store.cart);
  const isCategory = useSelector((state) => state.store.isCategory);
  const cartCalculations = useSelector((state) => state.store.cartCalculations);

  // auth selector
  const access_token = useSelector((state) => state.auth.access_token);

  // local state
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [placeOrderStatus, setPlaceOrderStatus] = useState(null);

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
      dispatch(storeActions.showProductByCategory(id));
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

  // calculate cart
  useEffect(() => {
    if (cart.length > 0) {
      handleCalculateCart(cart);
    }
  }, [cart]);

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
      dispatch(storeActions.searchProducts(value));
      setIsSearching(false);
    });
  };

  // toggle between categories and products
  const handleToggleCategory = () => {
    dispatch(storeActions.toggleCategory(!isCategory));
  };

  // add to cart
  const handleAddToCart = (product) => {
    dispatch(storeActions.addToCart(product));
  };

  // remove from cart
  const handleRemoveFromCart = (product) => {
    dispatch(storeActions.removeFromCart(product));
  };

  // calculate cart
  const handleCalculateCart = (productInCart) => {
    dispatch(storeActions.calculateCart(productInCart));
  };

  // place order
  const handlePlaceOrder = () => {
    setPlaceOrderStatus('idle');
    const delay = (ms) =>
      new Promise((res) => {
        setTimeout(res, ms);

        clearTimeout(ms);
      });

    delay(3000).then(() => {
      setPlaceOrderStatus('success');
      dispatch(storeActions.placeOrder());
    });
  };

  // cart watcher
  useEffect(() => {
    const delay = (ms) =>
      new Promise((res) => {
        setTimeout(res, ms);

        clearTimeout(ms);
      });
    if (placeOrderStatus === 'success') {
      delay(5000).then(() => {
        setPlaceOrderStatus(null);
        dispatch(storeActions.toggleCart(false));
      });
    }
  }, [placeOrderStatus, dispatch]);

  // cart table column
  const cartBoxColumn = [
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      calculations: cartCalculations.total,
    },
    {
      title: 'Shipping Cost',
      dataIndex: 'shippingCost',
      key: 'shippingCost',
      calculations: cartCalculations.shippingCost,
    },
    {
      title: 'Before Tax',
      dataIndex: 'beforeTax',
      key: 'beforeTax',
      calculations: cartCalculations.beforeTax,
    },
    {
      title: 'Tax',
      dataIndex: 'tax',
      key: 'tax',
      calculations: cartCalculations.tax,
    },
  ];

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
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          cart={cart}
        />
        <CartBox
          token={access_token}
          onClose={() => dispatch(storeActions.toggleCart(false))}
          open={showCart}
          cart={cart}
          columns={cartBoxColumn}
          grandTotal={cartCalculations.grandTotal}
          placeOrder={handlePlaceOrder}
          placeOrderStatus={placeOrderStatus}
        />
      </section>
    </div>
  );
}
export default StoreComponent;
