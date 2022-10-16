import { configureStore } from '@reduxjs/toolkit';

// import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from 'libs/bee-commerce/components/src/lib/category-component/category-component.slice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});
