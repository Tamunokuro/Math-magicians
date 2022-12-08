import operate from '../logic/operate';

describe('Tests for operations', () => {
  test('Results should be 2 + 5', () => {
    expect(operate(2, 5, '+')).toBe('7');
  });
  test('Results should be 2 * 5', () => {
    expect(operate(2, 5, 'x')).toBe('10');
  });
  test('Results should be 10 - 5', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  test('Results should be 20 ÷ 5', () => {
    expect(operate(20, 5, '÷')).toBe('4');
  });
  test('Results should be 20 % 0', () => {
    expect(operate(20, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
