import React from 'react';
import { useState } from 'react';
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
} from './NannyCard.styled';
import Star from '../../data/star.svg';
function calculateAge(birthDate) {
  const birthDateObj = new Date(birthDate);
  const currentDate = new Date();
  const differenceMs = currentDate - birthDateObj;
  const ageMs = new Date(differenceMs);
  const age = Math.abs(ageMs.getUTCFullYear() - 1970);
  return age;
}
export const NannyCard = ({ nannyData }) => {
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const toggleReviews = event => {
    event.preventDefault();
    setIsOpenReviews(!isOpenReviews);
  };
  if (!nannyData) {
    return null;
  }
  // console.log(nannyData);
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
  const age = calculateAge(birthday);
  return (
    <Container>
      <AvatarImg src={avatar_url} alt="Avatar nanny" />
      <BlockCard>
        <BlockInfo>
          <Titles>Nanny</Titles>
          <ListInfo>
            <ModuleInfo>
              <ValueInfo>{location}</ValueInfo>
            </ModuleInfo>
            <ModuleInfo>
              <TitlesInfo>Rating:</TitlesInfo> <ValueInfo>{rating}</ValueInfo>
            </ModuleInfo>
            <ModuleInfo>
              <TitlesInfo>Price / 1 hour: </TitlesInfo>
              <ValueInfo>{price_per_hour}$</ValueInfo>
            </ModuleInfo>
          </ListInfo>
        </BlockInfo>
        <h3>{name}</h3>
        <ListInfo>
          <ModuleInfo>
            <TitlesInfo>Age:</TitlesInfo>
            <ValueInfo>{age}</ValueInfo>
          </ModuleInfo>
          <ModuleInfo>
            <TitlesInfo>Experience:</TitlesInfo>
            <ValueInfo>{experience}</ValueInfo>
          </ModuleInfo>
          <ModuleInfo>
            <TitlesInfo>Kids Age: </TitlesInfo>
            <ValueInfo>{kids_age}</ValueInfo>
          </ModuleInfo>
          {/* <p>Characters: {characters}</p> */}
          <ModuleInfo>
            <TitlesInfo>Education: </TitlesInfo>
            <ValueInfo>{education}</ValueInfo>
          </ModuleInfo>
        </ListInfo>
        <div>
          <Titles>{about}</Titles>
          {/* <p>{reviews}</p> */}
        </div>

        {!isOpenReviews && (
          <ButtonMore href="" onClick={toggleReviews}>
            Read more
          </ButtonMore>
        )}
        <div>
          {isOpenReviews && (
            <>
              {reviews.map((data, index) => (
                <div key={index}>
                  <ListInfo>
                    <Litera>{data.reviewer.charAt(0)}</Litera>
                    <div>
                      <h3>{data.reviewer}</h3>
                      <ModuleInfo>
                        <img width="16" height="16" src={Star} alt="icon" />
                        <p>{data.rating}</p>
                      </ModuleInfo>
                    </div>
                  </ListInfo>
                  <p>{data.comment}</p>
                </div>
              ))}
              <button onClick={toggleReviews}>Close</button>
            </>
          )}
        </div>
      </BlockCard>
    </Container>
  );
};
