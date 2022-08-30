import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre: string = 'Ironman'
  edad: number = 45;


  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

}
