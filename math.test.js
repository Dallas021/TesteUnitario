const { soma, subtracao, multiplicacao, divisao } = require('./math');

test('soma', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subtracao', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

test('divisao', () => {
  expect(divisao(10, 2)).toBe(5);
});
