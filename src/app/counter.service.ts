export class CounterService {
  counter: number = 0;

  add() {
    this.counter++;
    console.log(this.counter);
  }
}
