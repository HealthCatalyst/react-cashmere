import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

test('renders learn react link', () => {
  render(<IconButton />);
  const buttonElm = screen.getByText(/button/i);
  expect(buttonElm).toBeInTheDocument();
});
