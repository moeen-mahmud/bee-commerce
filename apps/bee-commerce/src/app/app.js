import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Header } from '@bee-commerce/bee-commerce/shared-ui';
import Home from '../pages/home/home.page';
import LoginPage from '../pages/login-page/login.page';
import {
  getUserProfile,
  userLoginActions,
} from '@bee-commerce/bee-commerce/components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export function App() {
  const dispatch = useDispatch();

  const access_token = localStorage.getItem('access_token');

  useEffect(() => {
    if (access_token) {
      dispatch(userLoginActions.setAccessToken(access_token));
      dispatch(getUserProfile(access_token));
    }
  }, [access_token, dispatch]);

  return (
    <Layout>
      <Header
        token={access_token}
        logOut={() => dispatch(userLoginActions.logoutUser())}
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
