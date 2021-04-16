import { render, screen } from '@testing-library/react';
import List from './List';

test('renders list component', () => {
  render(<List />);
  const linkElement = screen.getByText(/list/i);
  expect(linkElement).toBeInTheDocument();
});
