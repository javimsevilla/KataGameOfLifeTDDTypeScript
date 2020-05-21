export class Cell {
  constructor(private state: boolean = true) {}

  isAlive(): boolean {
    return this.state;
  }

  setState(state: boolean): void {
    this.state = state;
  }
}
