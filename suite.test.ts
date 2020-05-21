import { GameOfLife } from './GameOfLife';

describe('GameOfLife Testing', () => {
  test('La suite de test funciona correctamente', function () {
    var expected = true;
    var result = true;
    expect(result).toBe(expected);
  });

  test('Puede crear una celula', function () {
    var result = new Cell();
    expect(result).toBeDefined();
  });
});
