import React from 'react';
import { Container, Section } from './pages.styled';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import options from '../data/options';
import Header from '../components/Header/header';
export default function Favorites() {
  return (
    <Container>
      <Header />
      <Section>
        <CustomSelect options={options} />
      </Section>
    </Container>
  );
}