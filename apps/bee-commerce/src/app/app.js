import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home.page';
import { Header } from '@bee-commerce/bee-commerce/shared-ui';
import Categories from '../pages/categories/categories.page';

export function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {/* END: routes */}
    </Layout>
  );
}
export default App;
