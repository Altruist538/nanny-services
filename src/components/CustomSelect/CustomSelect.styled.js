import styled from 'styled-components';

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 226px;
  margin-top: 64px;
`;
export const TitleSelect = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
  margin-bottom: 8px;
`;
export const SelectStyle = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  height: 48px;
  width: 226px;
  align-items: center;
  padding: 16px 15px 16px 18px;
  border: 1px solid #ccc;
  border-radius: 14px;
  background-color: #103931;
  position: relative;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  list-style: none;

  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
export const OptionItem = styled.li`
  padding: 10px 20px;
  color: rgba(17, 16, 28, 0.3);

  font-family: 'Helvetica Neue';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(20 / 18);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
