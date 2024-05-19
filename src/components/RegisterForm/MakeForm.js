import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  LabelEnter,
  FormInput,
  ButtonModalSubmit,
  BlockOne,
  FormInputSmall,
  FormInputComment,
} from './RegisterForm.styled';
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const validationSchema = Yup.object().shape({
  username: Yup.string(),
  // required("Обов'язкове поле")

  email: Yup.string().email('Невірний формат email'),
  // .required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Пароль повинен бути не менше 6 символів'),
  // .required("Обов'язкове поле"),
});

const MakeForm = ({ clousModal }) => {
  const [meetingTime, setMeetingTime] = useState('00:00');
  const [telValue, setTelValue] = useState('');

  const initialValues = {
    address: '',
    tel: '',
    email: '',
    mathersname: '',
    time: '',
    childage: '',
    comment: '',
  };
  const handleChangeTel = e => {
    const value = e.target.value;
    setTelValue(value);
  };
  const handleChange = e => {
    setMeetingTime(e.target.value);
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
            {' '}
            <BlockOne>
              <LabelEnter>
                <FormInputSmall
                  type="text"
                  name="address"
                  placeholder="Address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </LabelEnter>
              <LabelEnter>
                <FormInputSmall
                  type="tel"
                  name="tel"
                  pattern="[+380]{1}[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}"
                  placeholder="+380"
                  value={telValue}
                  onChange={handleChangeTel}
                />
                <ErrorMessage name="tel" component="div" className="error" />
              </LabelEnter>
              <LabelEnter>
                <FormInputSmall
                  type="number"
                  name="childage"
                  placeholder="Child's age"
                />
                <ErrorMessage
                  name="childage"
                  component="div"
                  className="error"
                />
              </LabelEnter>
              <LabelEnter>
                <FormInputSmall
                  type="time"
                  name="time"
                  value={meetingTime}
                  minutes-step="30"
                  onChange={handleChange}
                />
                <ErrorMessage name="time" component="div" className="error" />
              </LabelEnter>
            </BlockOne>
            <LabelEnter>
              <FormInput
                type="text"
                name="mathersname"
                placeholder="Father's or mother's name"
              />
              <ErrorMessage
                name="mathersname"
                component="div"
                className="error"
              />
            </LabelEnter>
            <LabelEnter>
              <FormInput type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </LabelEnter>
            <LabelEnter>
              <FormInputComment
                as="textarea"
                type="text"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </LabelEnter>
            <ButtonModalSubmit type="submit">Send</ButtonModalSubmit>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MakeForm;
