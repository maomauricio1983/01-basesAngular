import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  //esta seccion recibe los componentes
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent
  ],
  //esta seccion recibe los modulos
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
