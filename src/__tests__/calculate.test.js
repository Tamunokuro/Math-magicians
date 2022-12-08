import calculate from '../logic/calculate';

describe('Tests for the calculate function', () => {
  const obj = {
    total: '',
    next: '',
    operation: '',
  };
  test('Object value are null', () => {
    expect(calculate(obj, 'AC')).toStrictEqual(obj);
  });
});
