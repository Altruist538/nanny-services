// import { LinkHome, HeaderBlock, LogoStatic, ButtonLogo } from './header.styled';
// import { Outlet } from 'react-router-dom';
// const Header = () => {
//   return (
//     <div>
//       <HeaderBlock>
//         <LogoStatic>Nannies.Services</LogoStatic>
//         <nav>
//           <LinkHome to="/">Home</LinkHome>
//           <LinkHome to="/catalog">Nannies</LinkHome>
//           <LinkHome to="/favorites">Favorites</LinkHome>
//         </nav>
//         <div>
//           <ButtonLogo type="button">Log Out</ButtonLogo>
//         </div>
//         <Outlet />
//       </HeaderBlock>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { LinkHome, HeaderBlock, LogoStatic, ButtonLogo } from './header.styled';
import { Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

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
            to="/catalog"
            className={location.pathname === '/catalog' ? 'active-link' : ''}
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
        <div>
          <ButtonLogo type="button">Log Out</ButtonLogo>
        </div>
        <Outlet />
      </HeaderBlock>
    </div>
  );
};

export default Header;
