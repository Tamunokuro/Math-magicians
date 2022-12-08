import { render, screen } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Test for elements in quotes page', () => {
  it('Quotes page should have a heading tag', () => {
    render(<Quotes />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
