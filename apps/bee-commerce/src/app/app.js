import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Header } from '@bee-commerce/bee-commerce/shared-ui';
import Home from '../pages/home/home.page';
import LoginPage from '../pages/login-page/login.page';
import {
  getUserProfile,
  storeActions,
  userLoginActions,
} from '@bee-commerce/bee-commerce/components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  // redux
  const dispatch = useDispatch();
  const storedAccessToken = useSelector((state) => state.auth.access_token);
  const access_token = localStorage.getItem('access_token');

  // get and set token
  useEffect(() => {
    if (access_token) {
      dispatch(userLoginActions.setAccessToken(access_token));
      dispatch(getUserProfile(access_token));
    }
  }, [access_token, dispatch]);

  return (
    <Layout>
      <Header
        token={storedAccessToken}
        logOut={() => dispatch(userLoginActions.logoutUser())}
        cartToggler={() => dispatch(storeActions.toggleCart(true))}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* END: routes */}
    </Layout>
  );
}
export default App;
