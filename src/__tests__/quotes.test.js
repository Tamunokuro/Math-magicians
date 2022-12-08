import { render, screen } from '@testing-library/react';
import Quotes from '../components/Quotes';

it('Quotes page should have a heading tag', () => {
  render(<Quotes />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
