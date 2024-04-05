import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkHome } from '../components/Header/header.styled';
// import ClBtnIco from '../data/x.svg';
import {
  HomeLine,
  Title,
  TitleBlok,
  ButtonGet,
  TitleText,
  HomeContainer,
  HeaderHome,
  HomeBlock,
  ButtonGrup,
  BackgroundFon,
  ButtonLogIn,
  LogoStatic,
  ExperiencedBlock,
  Rectangle,
  ModalText,
  ModalTitle,
} from './pages.styled';
import ModalSkelet from 'components/Modal/ModalSkelet';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/RegisterForm/LogInForm';
import { useAuth } from 'hooks/use-auth';
import PersonAndLogOut from 'components/PersonAndLogOut/PersonAndLogOut';

export default function Home() {
  const { isAuth, name, removeAuth } = useAuth();
  const [isOpenRegistr, setIsOpenRegistr] = useState(false);
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isStatusLogIn, setIsStatusLogIn] = useState(false);
  // const isStatus = !!isAuth;
  useEffect(() => {
    setIsStatusLogIn(!!isAuth);
  }, [isAuth]);

  console.log(isStatusLogIn);
  const removeAuthStatus = () => {
    setIsStatusLogIn(!isStatusLogIn);
    removeAuth();
  };
  const toggleModal = () => {
    setIsOpenRegistr(!isOpenRegistr);
  };
  const toggleModalLog = () => {
    setIsOpenLog(!isOpenLog);
  };

  const location = useLocation();
  return (
    <>
      <HomeContainer>
        <BackgroundFon>
          <HomeLine></HomeLine>
          <LogoStatic>Nannies.Services</LogoStatic>
          <TitleBlok>
            <Title>Make Life Easier for the Family :</Title>
            <TitleText>Find Babysitters Online for All Occasions</TitleText>
            <ButtonGet
              to="/nanny"
              className={location.pathname === '/nanny' ? 'active-link' : ''}
            >
              Get started{' '}
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8229 1.67313C12.7461 1.12622 12.2404 0.745174 11.6935 0.822036L2.78109 2.0746C2.23418 2.15146 1.85313 2.65713 1.92999 3.20404C2.00685 3.75095 2.51252 4.13199 3.05943 4.05513L10.9816 2.94175L12.095 10.8639C12.1718 11.4108 12.6775 11.7918 13.2244 11.715C13.7713 11.6381 14.1524 11.1325 14.0755 10.5855L12.8229 1.67313ZM1.79864 16.7896L12.6313 2.41412L11.034 1.21049L0.201365 15.5859L1.79864 16.7896Z"
                  fill="#FBFBFB"
                />
              </svg>
            </ButtonGet>
          </TitleBlok>
        </BackgroundFon>
        <HomeBlock>
          <HeaderHome>
            <nav>
              <LinkHome
                to="/"
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                Home
              </LinkHome>
              {isStatusLogIn && (
                <LinkHome
                  to="/nanny"
                  className={
                    location.pathname === '/nanny' ? 'active-link' : ''
                  }
                >
                  Nannies
                </LinkHome>
              )}
            </nav>
            {!isStatusLogIn ? (
              <ButtonGrup>
                <ButtonLogIn type="button" onClick={toggleModalLog}>
                  Log In
                </ButtonLogIn>
                <ButtonLogIn type="button" onClick={toggleModal}>
                  Registration
                </ButtonLogIn>
              </ButtonGrup>
            ) : (
              <PersonAndLogOut name={name} removeAuth={removeAuthStatus} />
            )}
          </HeaderHome>
          <ExperiencedBlock>
            <Rectangle>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 12.5L5 15L12.5 22.5L25 10L22.5 7.5L12.5 17.5L7.5 12.5Z"
                  fill="#FBFBFB"
                />
              </svg>
            </Rectangle>
            <div>
              <p>Experienced nannies</p>
              <h2>15,000</h2>
            </div>
          </ExperiencedBlock>
        </HomeBlock>
      </HomeContainer>
      <div>
        <ModalSkelet
          isOpen={isOpenRegistr}
          toggleModal={toggleModal}
          ModalFilling={
            <div>
              <ModalTitle>Registration</ModalTitle>
              <ModalText>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information.
              </ModalText>
              <RegistrationForm clousModal={toggleModal} />
            </div>
          }
        />
        <ModalSkelet
          isOpen={isOpenLog}
          toggleModal={toggleModalLog}
          ModalFilling={
            <div>
              <ModalTitle>Log In</ModalTitle>
              <ModalText>
                Welcome back! Please enter your credentials to access your
                account and continue your babysitter search.
              </ModalText>
              <LoginForm clousModal={toggleModalLog} />
            </div>
          }
        />
      </div>
    </>
  );
}
