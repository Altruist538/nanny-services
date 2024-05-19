import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 29px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
export const ListItem = styled.li`
  margin-top: 21px;
  width: 274px;
  height: 426px;
  position: relative;
`;
export const ImgCar = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const Container = styled.div`
  width: 1183px;
  /* height: 318px; */
  margin: auto auto 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 24px;
  background-color: #fbfbfb;
`;

export const BlockReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const BlockInfo = styled.div`
  display: flex;
  width: 918px;
  justify-content: space-between;
`;
export const ListInfoTop = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  /* gap: 10px; */
`;
export const ListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
export const BlockCard = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 992px;
`;
export const Titles = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);
  margin-top: 25px;
`;
export const NameNammy = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #11101c;
  margin: 0;
`;
export const TitlesInfo = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
  /* display: flex; */
  padding: 10px;
  width: 100%;
  white-space: nowrap;
`;
export const ValueInfo = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #11101c;
  display: flex;
  padding: 5px;
  white-space: nowrap;
`;
export const ValueInfoGreen = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #38cd3e;
  display: flex;
  /* padding: 10px; */
  white-space: nowrap;
`;
export const ModuleInfoTop = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  /* height: 40px; */
`;
export const ModuleInfo = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  height: 40px;
  background-color: #f3f3f3;
  border-radius: 24px;
  padding: 8px 16px;
`;
export const Litera = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #103931;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background-color: rgba(16, 57, 49, 0.2);
`;
export const ReviewerName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #11101c;
  margin: 0;
`;
export const BigllInfoPpice = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
export const BigllInfoBlue = styled.span`
  margin-top: 14px;
  margin-bottom: 8px;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
export const HeartButton = styled.button`
  position: absolute;
  top: 18px;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.2);
    /* outline: none; */
    /* color: #000; */
  }
`;

export const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 30px;
`;
export const ButtonMore = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #11101c;
  margin: 20px;
`;
export const LearnMoretButton = styled.button`
  margin-top: 28px;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
export const LoadMoretButton = styled.button`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #3470ff;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0b44cd;
  }
`;
// export const HeartButton = styled.button`
//   cursor: pointer;
//   background-color: #0000;
//   border: none;
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `;
