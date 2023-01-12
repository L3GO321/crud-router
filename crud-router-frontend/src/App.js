import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { routes } from './utils'

export default function App() {
  const defaultRoute = <Navigate to='/' replace />

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} exact />
        ))}
        <Route path='*' element={defaultRoute} />
      </Routes>
    </BrowserRouter>
  );
}