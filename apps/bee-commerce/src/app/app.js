import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Header } from '@bee-commerce/bee-commerce/shared-ui';
import Home from '../pages/home/home.page';
import LoginPage from '../pages/login-page/login.page';

export function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* END: routes */}
    </Layout>
  );
}
export default App;
