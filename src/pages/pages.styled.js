import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

export const Container = styled.div`
  width: 1184px;

  margin-right: auto;
  margin-left: auto;
  min-height: calc(40vh - 50px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px; /* добавил px, чтобы задать размер шрифта */
  text-align: center;
  margin-bottom: 36px;
`;

const CustomSelectWrapper = styled.div`
  position: relative;
  width: 226px;
  margin-top: 64px;
`;

const SelectStyle = styled.div`
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

const OptionsList = styled.ul`
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

const OptionItem = styled.li`
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

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef();

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <CustomSelectWrapper ref={selectRef}>
      <SelectStyle onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
      </SelectStyle>
      <OptionsList isOpen={isOpen}>
        {options.map(option => (
          <OptionItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </OptionItem>
        ))}
      </OptionsList>
    </CustomSelectWrapper>
  );
};

export default CustomSelect;
