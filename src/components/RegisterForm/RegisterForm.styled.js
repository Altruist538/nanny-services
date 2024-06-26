import styled from 'styled-components';
import { Field } from 'formik';
export const FormInput = styled(Field)`
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  padding: 16px 37px 16px 18px;

  height: 52px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #11101c;
  }
`;
export const FormInputSmall = styled(FormInput)`
  width: 232px;
`;
export const FormInputComment = styled(FormInput)`
  height: 116px;
`;
export const BlockOne = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const LabelEnter = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const LabelEnterPassword = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 472px;
`;
export const ButtonModalSubmit = styled.button`
  background-color: #10393133;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #0a5050;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  width: 100%;
  height: 48px;
  margin-top: 40px;

  &:hover {
    background-color: #0a5050;
    border: 1px solid #0a5050;
    color: #fbfbfb;
  }
`;
export const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;
export const ButtonpasswordVisibility = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;
