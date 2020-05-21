import { GameOfLife } from './GameOfLife';
import { Cell } from './Cell';

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

  test('La celula está viva cuando se crea', function () {
    var expected = true;
    var cell = new Cell();
    var result = cell.isAlive();
    expect(result).toBe(expected);
  });
});
