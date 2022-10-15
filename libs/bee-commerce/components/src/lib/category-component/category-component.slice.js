import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '@bee-commerce/api';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

export const getAllCategories = createAsyncThunk(
  'hero/category-list',
  async () => {
    return await client.get(`/categories`);
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // Will be added later
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
  },
});
const categoryReducer = categorySlice.reducer;

export const selectAllCategories = (state) => state.categories.categories;
export default categoryReducer;
