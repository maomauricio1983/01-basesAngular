import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'bases';
  numero: number = 10;

  sumar() {
    this.numero += 1;
  }

  resta() {
    this.numero -= 1;
  }


  acumular(valor: number) {
    this.numero += valor;
  }
}
