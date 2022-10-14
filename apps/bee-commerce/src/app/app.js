import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home.page';
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}
export default App;
