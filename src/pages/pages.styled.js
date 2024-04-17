import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import fonHome from '../data/fon.jpg';
export const HomeContainer = styled.div`
  display: flex;
  width: 1400px;
  padding: 32px;
  background-color: #fbfbfb;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Section = styled.div`
  width: 1184px;
  margin: auto;
`;
export const HomeLine = styled.div`
  width: 100%;
  position: absolute;
  top: 120px;
  border-bottom: solid 1px rgba(251, 251, 251, 0.2);
`;
export const BackgroundFon = styled.div`
  width: 677px;
  height: 736px;
  background-color: #103931;
  border-radius: 30px 0 0 30px;
`;

export const HomeBlock = styled.div`
  width: 699px;
  height: 736px;

  background-image: linear-gradient(
      rgba(18, 20, 23, 0.6),
      rgba(18, 20, 23, 0.6)
    ),
    url(${fonHome});
  background-size: auto 736px;
  background-position: right;
  border-radius: 0 30px 30px 0;
`;
export const ButtonGrup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
`;
export const ButtonCentr = styled.div`
  margin: 50px auto 100px;
`;
export const HeaderHome = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  color: white;
`;
export const ExperiencedBlock = styled.div`
  display: flex;
  align-items: center;
  width: 284px;
  height: 118px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  bottom: 80px;
  right: 80px;
`;
export const Rectangle = styled.div`
  margin: 32px 16px 32px 32px;
  display: flex;
  width: 54px;
  height: 54px;
  background-color: #103931;
  border-radius: 13px;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 1440px;

  margin-right: auto;
  margin-left: auto;
  min-height: calc(40vh - 50px);
  display: flex;
  flex-direction: column;
`;
export const LogoStatic = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
  margin-left: 96px;
`;
export const LinkHome = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  position: relative;

  &.active-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: #fbfbfb;
    border-radius: 50%;
  }

  &:hover {
    color: #fbfbfb;

    text-shadow: 0px 14px 14px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #000;

    letter-spacing: -0.16px;
  }
`;
export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 70px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #fbfbfb;
`;
export const TitleText = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
`;

export const TitleBlok = styled.div`
  background-color: #10393133;
  width: 517px;
  height: 322px;
  margin-left: 96px;
  margin-top: 163px;
`;
export const ButtonGet = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  background-color: transparent;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  width: 230px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.01em;
  color: #fbfbfb;

  &:hover {
    background-color: #0a5050;
    border: 1px solid #0a5050;
  }
`;
export const ButtonLogIn = styled.button`
  background-color: #10393133;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #fbfbfb;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  width: 134px;
  height: 48px;

  &:hover {
    background-color: #0a5050;
    border: 1px solid #0a5050;
  }
`;
export const ModalText = styled.p`
  /* font-family: var(--font-family); */
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
`;
export const ModalTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #11101c;
`;
