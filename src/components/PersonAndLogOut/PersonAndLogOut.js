import { ButtonLogo, PersonIcon, PersonData } from '../Header/header.styled';
import Person from '../../data/person.svg';
const PersonAndLogOut = ({ name, removeAuth }) => {
  return (
    <>
      <PersonData>
        <PersonIcon>
          <img width="24" height="24" src={Person} alt="icon person" />
        </PersonIcon>
        <h3>{name}</h3>
      </PersonData>
      <div>
        <ButtonLogo type="button" onClick={removeAuth}>
          Log Out
        </ButtonLogo>
      </div>
    </>
  );
};
export default PersonAndLogOut;
