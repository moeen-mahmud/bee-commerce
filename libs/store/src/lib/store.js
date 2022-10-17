import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from 'libs/bee-commerce/components/src/lib/login-component/login.component.slice';
import userRegistrationReducer from 'libs/bee-commerce/components/src/lib/register/register.component.slice';
import storeReducer from 'libs/bee-commerce/components/src/lib/store-component/store.component.slice';

export const store = configureStore({
  reducer: {
    store: storeReducer,
    user: userRegistrationReducer,
    auth: userLoginReducer,
  },
});
