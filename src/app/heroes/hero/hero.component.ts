import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name : string = 'ironman';
  public age: number = 45;


  get capitalizadName(): string{
    return  this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return  `${this.name} - ${this.age}`;
  }

  // cambiar el nombre del heroe
  changeHero(): void{
    this.name ='Spiderman';
  }

  // cambia la edad del heroe
  changeAge(): void{
    this.age = 48;
  }


  resetForm(): void{
    this.name = "ironman";
    this.age = 45;
  }
}
