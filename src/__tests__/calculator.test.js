import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test for calculator component', () => {
  it('it should render the number of buttons in the calculator', () => {
    render(<Calculator />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(19);
  });

  it('Snapshot should match component render', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
  });
});
