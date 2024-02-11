import React from 'react';
import { Container } from './pages.styled';
import CustomSelect from './pages.styled'; // Импортируем компонент CustomSelect

export default function Home() {
  const options = [
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
    'Show all',
  ];

  return (
    <Container>
      {/* <Title>Phone book welcome page</Title> */}

      <CustomSelect options={options} />
    </Container>
  );
}
// export default function Home() {
//   return (
//     <Container>
//       <Title>Phone book welcome page</Title>
//       <ul>
//         <li value="A to Z">A to Z</li>
//         <li value="Less than 10$">Less than 10$</li>
//         <li value="Greater than 10$">Greater than 10$</li>
//         <li value="Popular">Popular</li>
//         <li value="Not popular">Not popular</li>
//         <li value="Show all">Show all</li>
//       </ul>
//     </Container>
//   );
// }
