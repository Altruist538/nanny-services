import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from 'pages/Home';
import { useAuth } from 'hooks/use-auth';
import Nanny from 'pages/Nanny';
import Favorites from 'pages/Favorites';

export const App = () => {
  const { isAuth } = useAuth();
  const [isStatusLogIn, setIsStatusLogIn] = useState(false);
  useEffect(() => {
    setIsStatusLogIn(!!isAuth);
  }, [isAuth]);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nanny" element={isStatusLogIn ? <Nanny /> : <Home />} />
          <Route
            path="/favorites"
            element={isStatusLogIn ? <Favorites /> : <Home />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
