import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {


  public contador: number = 10;

// incrementa de a uno
  increaseBy(value: number): void {
    this.contador += value;
  }

  reset(): void{
    this.contador = 10;
  }
}
