import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('renders list component', () => {
  render(<ListItem item={1}/>);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
