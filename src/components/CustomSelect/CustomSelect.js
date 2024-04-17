import React, { useState, useRef, useEffect } from 'react';
import {
  CustomSelectWrapper,
  TitleSelect,
  SelectStyle,
  OptionsList,
  OptionItem,
} from './CustomSelect.styled';

export const CustomSelect = ({ options, statusSelect }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef();

  const handleOptionClick = option => {
    setSelectedOption(option);
    statusSelect(option);
    setIsOpenSelect(false);
  };

  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpenSelect(false);
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
      <TitleSelect>Filters</TitleSelect>
      <SelectStyle onClick={() => setIsOpenSelect(!isOpenSelect)}>
        {selectedOption || 'Select an option'}
      </SelectStyle>
      <OptionsList style={{ display: isOpenSelect ? 'block' : 'none' }}>
        {options.map(option => (
          <OptionItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </OptionItem>
        ))}
      </OptionsList>
    </CustomSelectWrapper>
  );
};

// export default CustomSelect;
