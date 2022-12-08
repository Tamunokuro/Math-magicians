import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('it should render the number of li tags in the navbar', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  const listElements = screen.getAllByRole('listitem');
  expect(listElements.length).toBe(3);
});
