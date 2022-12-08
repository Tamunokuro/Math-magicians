import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Test for elements in Home page', () => {
  it('Home page should have a heading tag', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Home page should have the word Magician', () => {
    render(<Home />);
    expect(screen.queryByText(/Welcome to Math/)).toBeInTheDocument();
  });
});
