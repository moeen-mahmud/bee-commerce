import { Routes, Route } from 'react-router-dom';

export function PublicRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<div>Public Routes</div>} />
    </Routes>
  );
}
export default PublicRoutes;
