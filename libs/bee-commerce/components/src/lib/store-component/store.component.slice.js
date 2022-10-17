import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@bee-commerce/api';

const initialState = {
  categories: [],
  selectedCategory: {},
  products: [],
  searchedProducts: [],
  productByCategory: [],
  status: 'idle',
  isCategory: true,
  error: null,
  cart: [],
  cartCalculations: {
    total: 0,
    shippingCost: 0,
    beforeTax: 0,
    tax: 0,
    grandTotal: 0,
  },
  showCart: false,
};

export const getAllCategories = createAsyncThunk(
  'hero/category-list',
  async () => {
    return await client.get(`/categories`);
  }
);

export const getByCategoryId = createAsyncThunk(
  'hero/category-list/category',
  async (id) => {
    return await client.get(`/categories/${id}`);
  }
);

export const getAllProducts = createAsyncThunk(
  'hero/product-list',
  async () => {
    return await client.get(`/products`);
  }
);

const storeSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    showProductByCategory(state, action) {
      const products = state.products.filter(
        (product) => product.category.id === action.payload
      );
      state.productByCategory = products;
    },
    searchProducts(state, action) {
      if (state.isCategory) {
        const products = state.productByCategory.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.productByCategory = products;
      } else {
        const products = state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.productByCategory = products;
      }
    },
    toggleCategory(state, action) {
      state.isCategory = action.payload;
    },
    addToCart(state, action) {
      const product = state.productByCategory.find(
        (product) => product.id === action.payload
      );
      state.cart.push(product);
    },
    removeFromCart(state, action) {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart.splice(index, 1);
    },
    toggleCart(state, action) {
      state.showCart = action.payload;
    },
    calculateCart(state, action) {
      const total = state.cart.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
      const shippingCost = 10;
      const beforeTax = total + shippingCost;
      const tax = beforeTax * 0.1;
      const grandTotal = beforeTax + tax;
      state.cartCalculations = {
        total,
        shippingCost,
        beforeTax,
        tax,
        grandTotal,
      };
    },
    placeOrder(state, action) {
      state.cart = [];
      state.cartCalculations = {
        total: 0,
        shippingCost: 0,
        beforeTax: 0,
        tax: 0,
        grandTotal: 0,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.status = 'idle';
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.categories = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(getByCategoryId.pending, (state, action) => {
      state.status = 'idle';
    });
    builder.addCase(getByCategoryId.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.selectedCategory = action.payload;
    });
    builder.addCase(getByCategoryId.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.status = 'idle';
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});
const storeReducer = storeSlice.reducer;
export const storeActions = storeSlice.actions;

export const selectAllCategories = (state) => state.store.categories;
export const selectCategoryById = (state) => state.store.selectedCategory;
export const selectAllProducts = (state) => state.store.products;
export const selectProductByCategory = (state) => state.store.productByCategory;
export default storeReducer;
