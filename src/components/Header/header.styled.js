import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoStatic = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #fbfbfb;
`;

export const HeaderBlock = styled.div`
  /* width: 1440px; */
  height: 88px;
  margin-right: auto;
  margin-left: auto;
  color: white;
  background-color: #103931;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonLogo = styled.button`
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
  }
`;

export const PersonIcon = styled.div`
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #fbfbfb;
`;
export const PersonData = styled.div`
  display: flex;
  align-items: center;
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
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* -webkit-text-stroke-width: 1; */
    /* -webkit-text-stroke-color: #000;
    letter-spacing: -0.16px; */
  }
`;
