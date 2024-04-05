import React, { useState, useEffect } from 'react';
import { Container } from './pages.styled';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import Header from '../components/Header/header';
import { NannyCard } from 'components/carCard/NannyCard';
import options from '../data/options';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Nanny() {
  const [dataAllNanny, setDataAllNanny] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const db = getDatabase();
      const starCountRef = ref(db);
      const unsubscribe = onValue(starCountRef, snapshot => {
        const data = snapshot.val();
        setDataAllNanny(data);
      });
      return () => unsubscribe();
    };
    fetchData();
  }, []);
  console.log(dataAllNanny);
  return (
    <Container>
      <Header />
      <CustomSelect options={options} />
      {dataAllNanny.map(data => (
        <NannyCard key={data.name} nannyData={data} />
      ))}
    </Container>
  );
}
