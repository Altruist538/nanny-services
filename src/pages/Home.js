import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkHome } from '../components/Header/header.styled';
import Arrow from '../data/arrow.svg';
import Check from '../data/check.svg';
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
              <img width="15" height="17" src={Arrow} alt="icon arrow" />
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
              <img width="30" height="30" src={Check} alt="icon arrow" />
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
