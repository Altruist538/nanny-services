import React, { useState, useEffect } from 'react';
import { ButtonLogIn, Container, ButtonCentr, Section } from './pages.styled';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import Header from '../components/Header/header';
import { NannyCard } from 'components/carCard/NannyCard';
import options from '../data/options';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Nanny() {
  const [dataAllNanny, setDataAllNanny] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const indexOfFirstItem = 0;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('Show all');
  const applyFilter = (filter, data) => {
    switch (filter) {
      case 'A to Z':
        setFilteredData([...data].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case 'Z to A':
        setFilteredData([...data].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case 'Less than 10$':
        setFilteredData(data.filter(item => item.price_per_hour < 10));
        break;
      case 'Greater than 10$':
        setFilteredData(data.filter(item => item.price_per_hour > 10));
        break;
      case 'Popular':
        setFilteredData([...data].sort((a, b) => b.rating - a.rating));
        break;
      case 'Not popular':
        setFilteredData([...data].sort((a, b) => a.rating - b.rating));
        break;
      default:
        setFilteredData(data);
        break;
    }
  };
  useEffect(() => {
    const fetchData = () => {
      const db = getDatabase();
      const starCountRef = ref(db);
      const unsubscribe = onValue(starCountRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          setDataAllNanny(data);
          applyFilter(selectedFilter, data);
        }
      });
      return () => unsubscribe();
    };

    fetchData();
  }, [selectedFilter]);

  const handleStatusSelect = status => {
    setSelectedFilter(status);
  };
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(dataAllNanny);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <Container>
      <Header />
      <Section>
        <CustomSelect options={options} statusSelect={handleStatusSelect} />
      </Section>
      {currentItems.map(data => (
        <NannyCard key={data.name} nannyData={data} />
      ))}
      <ButtonCentr>
        <ButtonLogIn type="button" onClick={() => paginate(currentPage + 1)}>
          Load more
        </ButtonLogIn>
      </ButtonCentr>
    </Container>
  );
}
