import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <H3>Counter: {{ counter }}</H3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}