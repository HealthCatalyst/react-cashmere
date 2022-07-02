import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders learn react link', () => {
  render(<Button>button</Button>);
  const buttonElm = screen.getByText(/button/i);
  expect(buttonElm).toBeInTheDocument();
});
