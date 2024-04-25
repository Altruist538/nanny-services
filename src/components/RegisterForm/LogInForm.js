import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import {
  Container,
  LabelEnter,
  FormInput,
  ButtonModalSubmit,
  LabelEnterPassword,
  ButtonpasswordVisibility,
} from './RegisterForm.styled';
import NoVisibilityIcon from '../../data/eye-off.svg';
import VisibilityIcon from '../../data/eye.svg';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { error } from 'jquery';
import { useAuth } from 'hooks/use-auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Невірний формат email'),
  // .required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Пароль повинен бути не менше 6 символів'),
  // .required("Обов'язкове поле"),
});

const LoginForm = ({ clousModal }) => {
  const { setIsAuth } = useAuth();
  const initialValues = {
    email: '',
    password: '',
  };
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const onSubmit = values => {
    console.log(values.email);
    console.log(values.password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(({ user }) => {
        console.log(user);
        setIsAuth({
          name: user.displayName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        });
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
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
            <ButtonModalSubmit type="submit">Log In</ButtonModalSubmit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
