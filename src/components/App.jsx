import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Header from './Header/header';
// import Catalog from 'pages/catalog';
// import Favorites from 'pages/favorites';

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </div>
  );
};
