import { InterfaceFilms } from './../../interface/interface-films';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

/* 
Todo se mete dentro de la class.
El @Input (para pasar los datos al padre, que lo dibujará)
*/

export class FilmsComponent implements OnInit { 

@Input() pelis:InterfaceFilms = {genero: "", peli: []};

   constructor() {
   }

  ngOnInit(): void { 
  }
  
}
