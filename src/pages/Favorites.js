import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLogIn, Container, ButtonCentr, Section } from './pages.styled';
import { CustomSelect } from '../components/CustomSelect/CustomSelect';
import options from '../data/options';
import Header from '../components/Header/header';
import { NannyCard } from 'components/carCard/NannyCard';
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
  const applyFilter = (filter, data) => {
    switch (filter) {
      case 'A to Z':
        setFilteredData([...data].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case 'Z to A':
        setFilteredData([...data].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case 'Less than 15$':
        setFilteredData(data.filter(item => item.price_per_hour <= 15));
        break;
      case 'Greater than 15$':
        setFilteredData(data.filter(item => item.price_per_hour > 15));
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
      if (favorites) {
        setDataAllNanny(favorites);
        applyFilter(selectedFilter, favorites);
      }

      return;
    };

    fetchData();
  }, [selectedFilter]);
  // const restartStatus = () => {
  //   setFavorites(useSelector(state => state.favorites));
  // };
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
        <NannyCard
          key={data.name}
          nannyData={data}
          // restartStatus={restartStatus}
        />
      ))}
      <ButtonCentr>
        <ButtonLogIn type="button" onClick={() => paginate(currentPage + 1)}>
          Load more
        </ButtonLogIn>
      </ButtonCentr>
    </Container>
  );
}
