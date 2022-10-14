import { PublicRoutes } from '@bee-commerce/bee-commerce/routes';
import { BrowserRouter as Router } from 'react-router-dom';
export function App() {
  return (
    <>
      <Router>
        <PublicRoutes />
      </Router>
      {/* END: routes */}
    </>
  );
}
export default App;
