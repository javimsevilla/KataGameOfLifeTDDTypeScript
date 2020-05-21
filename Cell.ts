export class Cell {
  private static readonly ALIVE_STATE = true;

  constructor(private state: boolean = Cell.ALIVE_STATE) {}

  isAlive(): boolean {
    return this.state;
  }

  setState(state: boolean): void {
    this.state = state;
  }
}
