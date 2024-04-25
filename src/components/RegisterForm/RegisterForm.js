import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  LabelEnter,
  FormInput,
  ButtonModalSubmit,
  LabelEnterPassword,
  ButtonpasswordVisibility,
} from './RegisterForm.styled';
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import NoVisibilityIcon from '../../data/eye-off.svg';
import VisibilityIcon from '../../data/eye.svg';
const validationSchema = Yup.object().shape({
  username: Yup.string(),
  // required("Обов'язкове поле")

  email: Yup.string().email('Невірний формат email'),
  // .required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Пароль повинен бути не менше 6 символів'),
  // .required("Обов'язкове поле"),
});

const RegistrationForm = ({ clousModal }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const onSubmit = values => {
    console.log(values.username);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        console.log(user);

        updateProfile(user, {
          displayName: values.username,
        });
      })
      .then(() => {
        console.log('Профиль пользователя успешно обновлен.');
      })
      .catch(error => {
        console.error('Ошибка при обновлении профиля:', error);
      });
    clousModal();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <LabelEnter>
              <FormInput type="text" name="username" placeholder="Name" />
              <ErrorMessage name="username" component="div" className="error" />
            </LabelEnter>
            <LabelEnter>
              <FormInput type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </LabelEnter>
            <LabelEnterPassword>
              <FormInput
                type={!passwordVisibility ? 'password' : 'text'}
                name="password"
                placeholder="Password"
              />

              <ButtonpasswordVisibility
                type="button"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={passwordVisibility ? VisibilityIcon : NoVisibilityIcon}
                  alt="icon"
                />
              </ButtonpasswordVisibility>

              <ErrorMessage name="password" component="div" className="error" />
            </LabelEnterPassword>
            <ButtonModalSubmit type="submit">Sign Up</ButtonModalSubmit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegistrationForm;
