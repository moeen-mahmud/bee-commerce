import { configureStore } from '@reduxjs/toolkit';

// import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from 'libs/bee-commerce/components/src/lib/category-component/category.component.slice';
import userLoginReducer from 'libs/bee-commerce/components/src/lib/login-component/login.component.slice';
import userRegistrationReducer from 'libs/bee-commerce/components/src/lib/register/register.component.slice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    user: userRegistrationReducer,
    auth: userLoginReducer,
  },
});
