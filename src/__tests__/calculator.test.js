import { render, screen, fireEvent } from '@testing-library/react';
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

  it('it add 7 and 3 By click button', () => {
    render(<Calculator />);
    const getFirtBtn = screen.getByTestId('7');
    const getSecondBtn = screen.getByTestId('3');
    const getOpBtn = screen.getByTestId('+');
    const getEqualBtn = screen.getByTestId('=');
    const calScreen = screen.getByTestId('screen');
    fireEvent.click(getFirtBtn, { target: { innerText: '7' } });
    fireEvent.click(getOpBtn, { target: { innerText: '+' } });
    fireEvent.click(getSecondBtn, { target: { innerText: '3' } });
    fireEvent.click(getEqualBtn, { target: { innerText: '=' } });
    expect(calScreen.textContent).toBe('10');
  });
});
