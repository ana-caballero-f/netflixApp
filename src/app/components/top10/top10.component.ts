import { InterfaceFilms } from './../../../../../../SOLUCIONES-ANGULAR/base-Netflix/src/app/interface/interface-films';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements OnInit {

  @Input() pelis: InterfaceFilms = {genero: "", peli: []};
  

  constructor() {
  }
    ngOnInit(): void {

    }
 
}
