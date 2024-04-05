import React from 'react';

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
  SubTitle,
  RentCondBlock,
  RentCondItem,
  RentCondAccent,
} from './Modal.styled';

import ClBtnIco from '../../data/x.svg';
// import DelimiterIco from '../../data/vector-line.svg';

import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ handleToggleModal, closeModal }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleToggleModal();
    }
  };

  const onEscPress = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      window.removeEventListener('keydown', onEscPress);
      closeModal();
    }
  };

  window.addEventListener('keydown', onEscPress);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={handleToggleModal}>
          <CloseButtonIco src={ClBtnIco} />
        </CloseButton>
        <SubTitle>Accessories and functionalities:</SubTitle>
        <SubTitle>Rental Conditions:</SubTitle>
        <RentCondBlock>
          <RentCondItem></RentCondItem>
          <RentCondItem></RentCondItem>
          <RentCondItem>
       
            <RentCondAccent>$</RentCondAccent>
          </RentCondItem>
        </RentCondBlock>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
