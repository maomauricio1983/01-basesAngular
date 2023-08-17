import {Component} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Thor', 'Wolverine', 'Hulk'];
  public deletedHero?: string;


  borrarUltimoHeroe(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
  }

}
