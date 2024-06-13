import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonLogIn, Container, ButtonCentr, Section } from './pages.styled';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import options from '../data/options';
import Header from '../components/Header/header';
import { NannyCard } from 'components/carCard/NannyCard';
import { applyFilter } from 'hooks/filter';

export default function Favorites() {
  const [dataAllNanny, setDataAllNanny] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = 0;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('Show all');
  const favorite = useSelector(state => state.favorites);
  const [favorites, setFavorites] = useState(favorite);

  useEffect(() => {
    const fetchData = () => {
      if (favorites) {
        setDataAllNanny(favorites);
        setFilteredData(applyFilter(selectedFilter, favorites));
      }
    };

    fetchData();
  }, [favorites, selectedFilter]);

  const handleStatusSelect = status => {
    setSelectedFilter(status);
    setFilteredData(applyFilter(status, dataAllNanny));
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);
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
