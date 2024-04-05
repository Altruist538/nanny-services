import React from 'react';
import { useState, useEffect } from 'react';
import { LinkHome, HeaderBlock, LogoStatic } from './header.styled';
import { Outlet, useLocation } from 'react-router-dom';
import PersonAndLogOut from 'components/PersonAndLogOut/PersonAndLogOut';
import { useAuth } from 'hooks/use-auth';

const Header = () => {
  const location = useLocation();
  const [isStatusLogIn, setIsStatusLogIn] = useState(false);
  const { isAuth, name, removeAuth } = useAuth();
  // const isStatus = !!isAuth;
  useEffect(() => {
    setIsStatusLogIn(!!isAuth);
  }, [isAuth]);
  const removeAuthStatus = () => {
    setIsStatusLogIn(!isStatusLogIn);
    removeAuth();
  };
  return (
    <div>
      <HeaderBlock>
        <LogoStatic>Nannies.Services</LogoStatic>
        <nav>
          <LinkHome
            to="/"
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            Home
          </LinkHome>

          <LinkHome
            to="/nanny"
            className={location.pathname === '/nanny' ? 'active-link' : ''}
          >
            Nannies
          </LinkHome>

          <LinkHome
            to="/favorites"
            className={location.pathname === '/favorites' ? 'active-link' : ''}
          >
            Favorites
          </LinkHome>
        </nav>
        <PersonAndLogOut name={name} removeAuth={removeAuthStatus} />
      </HeaderBlock>
      <Outlet />
    </div>
  );
};

export default Header;
