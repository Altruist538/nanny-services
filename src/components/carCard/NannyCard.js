import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ImgCar,
  BlockBigllInfo,
  BigllInfo,
  BigllInfoBlue,
  SmallInfo,
  HeartImg,
  HeartButton,
  LearnMoretButton,
  BigllInfoPpice,
} from './NannyCard.styled';
import imgDefault from '../../data/car-d.jpg';
import iconHeart from '../../data/heart.svg';
import iconHeartActiv from '../../data/heartblue.svg';
import CarModal from '../Modal/CarModal';
import { toggleFavorite } from 'redux/favoritesSlice';
export const NannyCard = ({ car }) => {
  const {
    id,
    make,
    img,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const handleToggleModal = () => {
    setIsOpenedModal(prevState => !prevState);
    if (isOpenedModal === true) {
      document.body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsOpenedModal(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <>
      {isOpenedModal && (
        <CarModal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          car={car}
        />
      )}
      <HeartButton>
        {!favorites.includes(car.id) && (
          <HeartImg
            src={iconHeart}
            alt={make}
            onClick={() => dispatch(toggleFavorite(car.id))}
          />
        )}

        {favorites.includes(car.id) && (
          <HeartImg
            src={iconHeartActiv}
            alt={make}
            onClick={() => dispatch(toggleFavorite(car.id))}
          />
        )}
      </HeartButton>
      <ImgCar src={img || imgDefault} alt={make} />

      <BlockBigllInfo>
        <BigllInfo>
          {make} <BigllInfoBlue>{model},</BigllInfoBlue> {year}
        </BigllInfo>
        <BigllInfoPpice> {rentalPrice}</BigllInfoPpice>
      </BlockBigllInfo>
      <SmallInfo>
        {address.split(',').slice(-2).join(' | ')} | {rentalCompany}
      </SmallInfo>
      <SmallInfo>
        {type} | {make} | {id} | {functionalities[0]}
      </SmallInfo>
      <LearnMoretButton type="button" onClick={handleToggleModal}>
        Learn more
      </LearnMoretButton>
    </>
  );
};
