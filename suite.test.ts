import { GameOfLife } from './GameOfLife';
import { Cell } from './Cell';

describe('GameOfLife Testing', () => {
  test('La suite de test funciona correctamente', function () {
    var expected = true;
    var result = true;
    expect(result).toBe(expected);
  });

  test('Puede crear una celula', function () {
    // Prepara + Actua
    var result = new Cell();

    // Afirma
    expect(result).toBeDefined();
  });

  test('La celula está viva cuando se crea', function () {
    // Prepara
    var expected = true;
    var cell = new Cell();

    // Actua
    var result = cell.isAlive();

    // Afirma
    expect(result).toBe(expected);
  });

  test('La celula muere cuando tiene menos de 2 celulas vecinas vivas', function () {
    // Prepara
    const NUMBER_OF_NEIGHBORS = 1;
    let expected = false;
    let cell = new Cell();
    let game = new GameOfLife();

    // Actua
    cell.setState(game.getNextState(cell.isAlive(), NUMBER_OF_NEIGHBORS));
    let result = cell.isAlive();

    // Afirma
    expect(result).toBe(expected);
  });
});
