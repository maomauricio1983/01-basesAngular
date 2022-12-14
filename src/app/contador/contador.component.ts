import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent  {


  public title: string = 'Contador App';
  numero: number = 10;
  base : number = 5;

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
