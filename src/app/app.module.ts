import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { FilmsComponent } from './components/films/films.component';
import { Top10Component } from './components/top10/top10.component';
import { ModoDiaNocheComponent } from './components/nav/modo-dia-noche/modo-dia-noche.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
    FilmsComponent,
        Top10Component,
        ModoDiaNocheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
