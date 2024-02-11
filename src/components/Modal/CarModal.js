import React from 'react';

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseButtonIco,
  ImageThumb,
  Image,
  MainInfo,
  Make,
  Model,
  Year,
  ExtraInfo,
  ReviewItem,
  Delimiter,
  Description,
  SubTitle,
  LineBreaker,
  RentCondBlock,
  RentCondItem,
  RentCondAccent,
  RentCarBtn,
} from './CarModal.styled';

import ClBtnIco from '../../data/x.svg';
import DelimiterIco from '../../data/vector-line.svg';

import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const CarModal = ({ handleToggleModal, closeModal, car }) => {
  const adress = car.address.split(', ');
  const country = adress[adress.length - 1];
  const city = adress[adress.length - 2];
  const justRentalPrice = car.rentalPrice.slice(1, car.rentalPrice.length);
  const rentalConditions = car.rentalConditions.split('\n');
  const minAge = rentalConditions[0].split(': ');

  let mileage = car.mileage.toString().split('');
  mileage.splice(mileage.length - 3, 0, ',');

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
        <div>
          <ImageThumb>
            <Image src={car.img} alt="car preview" />
          </ImageThumb>
        </div>

        <MainInfo>
          <Make>{car.make}&nbsp;</Make>
          <Model>{car.model}</Model>
          <Year>, {car.year}</Year>
        </MainInfo>
        <ExtraInfo>
          <ReviewItem>{city}</ReviewItem>
          <Delimiter src={DelimiterIco} />
          <ReviewItem>{country}</ReviewItem>
          <Delimiter src={DelimiterIco} />
          <ReviewItem>Id: {car.id}</ReviewItem>
          <Delimiter src={DelimiterIco} />
          <ReviewItem>Year: {car.year}</ReviewItem>
          <Delimiter src={DelimiterIco} />
          <ReviewItem>Type: {car.type}</ReviewItem>
        </ExtraInfo>
        <ExtraInfo>
          <ReviewItem>Fuel Consumption: {car.fuelConsumption}</ReviewItem>
          <Delimiter src={DelimiterIco} />
          <ReviewItem>Engine Size: {car.engineSize}</ReviewItem>
        </ExtraInfo>

        <Description>{car.description}</Description>

        <SubTitle>Accessories and functionalities:</SubTitle>
        <ExtraInfo>
          {car.accessories.map((item, index, array) => {
            return (
              <LineBreaker key={item}>
                <ReviewItem> {item}</ReviewItem>
                {array.length - 1 !== index && <Delimiter src={DelimiterIco} />}
              </LineBreaker>
            );
          })}
        </ExtraInfo>

        <ExtraInfo>
          {car.functionalities.map((item, index, array) => {
            return (
              <LineBreaker key={item}>
                <ReviewItem> {item}</ReviewItem>
                {array.length - 1 !== index && <Delimiter src={DelimiterIco} />}
              </LineBreaker>
            );
          })}
        </ExtraInfo>

        <SubTitle>Rental Conditions:</SubTitle>
        <RentCondBlock>
          <RentCondItem>
            {minAge[0]}:&nbsp;<RentCondAccent>{minAge[1]}</RentCondAccent>
          </RentCondItem>
          <RentCondItem>{rentalConditions[1]}</RentCondItem>
          <RentCondItem>{rentalConditions[2]} </RentCondItem>

          <RentCondItem>
            Mileage:&nbsp;<RentCondAccent>{mileage}</RentCondAccent>
          </RentCondItem>
          <RentCondItem>
            Price:&nbsp;
            <RentCondAccent>{justRentalPrice}$</RentCondAccent>
          </RentCondItem>
        </RentCondBlock>

        <RentCarBtn href="tel:+380730000000">Rental car</RentCarBtn>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default CarModal;
