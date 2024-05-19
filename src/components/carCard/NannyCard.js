import React, { useState, useEffect } from 'react';
import {
  AvatarImg,
  BlockCard,
  ListInfo,
  Container,
  TitlesInfo,
  Titles,
  ValueInfo,
  ModuleInfo,
  BlockInfo,
  Litera,
  ButtonMore,
  ReviewerName,
  ListInfoTop,
  ModuleInfoTop,
  ValueInfoGreen,
  BlockReviews,
  HeartButton,
  NameNammy,
} from './NannyCard.styled';
import { ButtonLogIn, ModalText, ModalTitle } from '../../pages/pages.styled';
import Star from '../../data/star.svg';
import Map from '../../data/map-pin.svg';
import Heart from '../../data/heart.svg';
import HeartGreen from '../../data/heartgreen.svg';

import ModalSkelet from 'components/Modal/ModalSkelet';
import MakeForm from 'components/RegisterForm/MakeForm';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
function calculateAge(birthDate) {
  const birthDateObj = new Date(birthDate);
  const currentDate = new Date();
  const differenceMs = currentDate - birthDateObj;
  const ageMs = new Date(differenceMs);
  const age = Math.abs(ageMs.getUTCFullYear() - 1970);
  return age;
}
export const NannyCard = ({ nannyData, restartStatus }) => {
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [isOpenRegistr, setIsOpenRegistr] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const status = favorites.some(item => item.name === nannyData.name);
  const [isOpenHeart, setIsOpenHeart] = useState(status);
  console.log(status);
  // const [favorites, setFavorites] = useState(useSelector(state => state.favorites);

  // useEffect(() => {
  //   if (!isOpenHeart) {
  //     dispatch(removeFavorite(nannyData));
  //   }
  // }, [isOpenHeart]);
  const toggleReviews = event => {
    event.preventDefault();
    setIsOpenReviews(!isOpenReviews);
  };
  if (!nannyData) {
    return null;
  }

  const {
    name,
    avatar_url,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = nannyData;

  const СharactersString = characters
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(', ');
  const age = calculateAge(birthday);
  const toggleModal = () => {
    setIsOpenRegistr(!isOpenRegistr);
  };

  const toggleFavorite = () => {
    if (status) {
      dispatch(removeFavorite(nannyData));
    } else {
      dispatch(addFavorite(nannyData));
    }
    setIsOpenHeart(!isOpenHeart);
    restartStatus();
  };

  console.log(favorites);
  return (
    <Container>
      <AvatarImg src={avatar_url} alt="Avatar nanny" />
      <BlockCard>
        <BlockInfo>
          <Titles>Nanny</Titles>
          <ListInfoTop>
            <ModuleInfoTop>
              <img width="16" height="20" src={Map} alt="icon" />
              <ValueInfo>{location}</ValueInfo>
              <TitlesInfo>|</TitlesInfo>
            </ModuleInfoTop>
            <ModuleInfoTop>
              <img width="16" height="16" src={Star} alt="icon" />
              <TitlesInfo>Rating:</TitlesInfo> <ValueInfo>{rating}</ValueInfo>
              <TitlesInfo>|</TitlesInfo>
            </ModuleInfoTop>

            <ModuleInfoTop>
              <TitlesInfo>Price / 1 hour: </TitlesInfo>
              <ValueInfoGreen>{price_per_hour}$</ValueInfoGreen>
            </ModuleInfoTop>
          </ListInfoTop>
        </BlockInfo>
        <h2>{name}</h2>
        <ListInfo>
          <ModuleInfo>
            <TitlesInfo>Age:</TitlesInfo>
            <ValueInfo>
              <u>{age}</u>
            </ValueInfo>
          </ModuleInfo>
          <ModuleInfo>
            <TitlesInfo>Experience:</TitlesInfo>
            <ValueInfo>{experience}</ValueInfo>
          </ModuleInfo>
          <ModuleInfo>
            <TitlesInfo>Kids Age: </TitlesInfo>
            <ValueInfo>{kids_age}</ValueInfo>
          </ModuleInfo>
          <ModuleInfo>
            <TitlesInfo>Characters: </TitlesInfo>
            <ValueInfo>{СharactersString}</ValueInfo>
          </ModuleInfo>

          <ModuleInfo>
            <TitlesInfo>Education: </TitlesInfo>
            <ValueInfo>{education}</ValueInfo>
          </ModuleInfo>
        </ListInfo>
        <div>
          <Titles>{about}</Titles>
        </div>

        {!isOpenReviews && (
          <ButtonMore href="" onClick={toggleReviews}>
            Read more
          </ButtonMore>
        )}
        <BlockReviews>
          {isOpenReviews && (
            <>
              {reviews.map((data, index) => (
                <div key={index}>
                  <ListInfo>
                    <Litera>{data.reviewer.charAt(0)}</Litera>
                    <div>
                      <ReviewerName>{data.reviewer}</ReviewerName>
                      <ModuleInfoTop>
                        <img width="16" height="16" src={Star} alt="icon" />
                        <ValueInfo>{data.rating}</ValueInfo>
                      </ModuleInfoTop>
                    </div>
                  </ListInfo>
                  <p>{data.comment}</p>
                </div>
              ))}

              <ButtonLogIn type="button" onClick={toggleModal}>
                Make an appointment
              </ButtonLogIn>
              <ButtonMore href="" onClick={toggleReviews}>
                Close
              </ButtonMore>
            </>
          )}
        </BlockReviews>
        <HeartButton type="button" onClick={toggleFavorite}>
          <img
            width="26"
            height="26"
            src={!isOpenHeart ? Heart : HeartGreen}
            alt="icon"
          />
        </HeartButton>
      </BlockCard>

      <ModalSkelet
        isOpen={isOpenRegistr}
        toggleModal={toggleModal}
        ModalFilling={
          <div>
            <ModalTitle>Make an appointment with a babysitter</ModalTitle>
            <ModalText>
              Arranging a meeting with a caregiver for your child is the first
              step to creating a safe and comfortable environment. Fill out the
              form below so we can match you with the perfect care partner.
            </ModalText>
            <ListInfo>
              <AvatarImg
                src={avatar_url}
                width="16"
                height="64"
                alt="Avatar nanny"
              />
              <BlockReviews>
                <Titles>Your nanny</Titles>
                <NameNammy>{name}</NameNammy>
              </BlockReviews>
            </ListInfo>
            <MakeForm clousModal={toggleModal} />
          </div>
        }
      />
    </Container>
  );
};
