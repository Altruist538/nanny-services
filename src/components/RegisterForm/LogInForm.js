import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import {
  Container,
  LabelEnter,
  FormInput,
  ButtonModalSubmit,
  EyeIcon,
} from './RegisterForm.styled';
import VisibilityIcon from '../../data/eye-off.png';
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
            <LabelEnter style={{ position: 'relative' }}>
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <EyeIcon>
                <img src={VisibilityIcon} alt="icon" />
              </EyeIcon>
              <ErrorMessage name="password" component="div" className="error" />
            </LabelEnter>
            <ButtonModalSubmit type="submit">Log In</ButtonModalSubmit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
