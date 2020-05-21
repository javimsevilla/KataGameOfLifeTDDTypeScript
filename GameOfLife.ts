export class GameOfLife {
  constructor() {}

  getNextState(previousState: boolean, numberOfNeighbors: number): boolean {
    return previousState && (numberOfNeighbors === 2 || numberOfNeighbors === 3);
  }
}
