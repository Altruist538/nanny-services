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
    width: 1440px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;
export const BlockBigllInfo = styled.div`
    display: flex;
   
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;
export const SmallInfo = styled.p`
margin-bottom: 4px;
margin-top: 0;
color: rgba(18, 20, 23, 0.50);
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; 
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;
export const BigllInfo = styled.p`
margin-top: 14px;
margin-bottom: 8px;
color: #121417;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
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
color: #3470FF;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
`;
export const HeartButton = styled.button`
  position: absolute;
  top: 14px;
  left: 234px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.2);
    outline: none;
    color: #000;
  } 
`;

export const HeartImg = styled.img`

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
  background-color: #3470FF;;
  border-radius: 12px;
  border: none;
  cursor: pointer;

font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: calc(20/14);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #0B44CD;
  }

`;
export const LoadMoretButton = styled.button`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #3470FF;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    color: #0B44CD;
  }

`;