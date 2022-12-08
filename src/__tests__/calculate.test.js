import calculate from '../logic/calculate';

test('Object value are null', () => {
  const obj = {
    total: '',
    next: '',
    operation: '',
  };
  expect(calculate(obj, 'AC')).toStrictEqual(obj);
});
