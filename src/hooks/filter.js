export function applyFilter(filter, data) {
  switch (filter) {
    case 'A to Z':
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    case 'Z to A':
      return [...data].sort((a, b) => b.name.localeCompare(a.name));
    case 'Less than 15$':
      return data.filter(item => item.price_per_hour <= 15);
    case 'Greater than 15$':
      return data.filter(item => item.price_per_hour > 15);
    case 'Popular':
      return [...data].sort((a, b) => b.rating - a.rating);
    case 'Not popular':
      return [...data].sort((a, b) => a.rating - b.rating);
    default:
      return data;
  }
}
