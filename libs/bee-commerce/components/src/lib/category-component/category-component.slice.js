import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@bee-commerce/api';

const initialState = {
  categories: [],
  selectedCategory: {},
  products: [],
  productByCategory: [],
  status: 'idle',
  error: null,
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

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    showProductByCategory(state, action) {
      const products = state.products.filter(
        (product) => product.category.id === action.payload
      );
      state.productByCategory = products;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.status = 'loading';
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
      state.status = 'loading';
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
      state.status = 'loading';
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
const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;

export const selectAllCategories = (state) => state.categories.categories;
export const selectCategoryById = (state) => state.categories.selectedCategory;
export const selectAllProducts = (state) => state.categories.products;
export const selectProductByCategory = (state) =>
  state.categories.productByCategory;
export default categoryReducer;
