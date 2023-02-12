import { Component } from '@angular/core';
import { InterfaceFilms } from './interface/interface-films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /* title = 'netflix-app'; */

  /* 
  Se declara cada array de pelis (géneros)
  siguiendo la estructura de la interface creada 
  */
  
  /* para entrar en genero sería pelis.genero (pelis es mi variable que igualo a la Interface)
      pero para entrar en título sería peli.titulo (peli es la variable que he puesto en el blucle ngFor) */
  public PelisAccion: InterfaceFilms = {
      genero: "Acción",
      peli: [
  {
        src: "./assets/images/Accion/elprotector.webp",
        titulo: 'El Protector'
  },

  {
    src: "./assets/images/Accion/equalizer2.webp",
    titulo: 'Equialicer'
},

{
  src: "./assets/images/Accion/heat.webp",
  titulo: 'Heat'
},

{
  src: "./assets/images/Accion/jackreacher.webp",
  titulo: 'Jack Reacher'
},

{
  src: "./assets/images/Accion/johnwick2.webp",
  titulo: 'Equialicer'
},

{
  src: "./assets/images/Accion/killbill2.webp",
  titulo: 'Kill Bill 2'
},

{
  src: "./assets/images/Accion/misionimposiblenacion.webp",
  titulo: 'Misión Imposible'
},
]
};

  public PelisAnime: InterfaceFilms = {
    genero: "Anime",
    peli: [
      {
      src: "./assets/images/Anime/ajin.jpg",
      titulo: 'Ajin'
},

{
  src: "./assets/images/Anime/castilloambulante.webp",
  titulo: 'El Castillo ambulante'
},

{
  src: "./assets/images/Anime/chihiro.webp",
  titulo: 'Chihiro'
},

{
  src: "./assets/images/Anime/evangelion.webp",
  titulo: 'Evangelion'
},

{
  src: "./assets/images/Anime/gitsarise.webp",
  titulo: 'Arise'
},

{
  src: "./assets/images/Anime/gundam.webp",
  titulo: 'Gundam'
},

{
  src: "./assets/images/Anime/laputa.webp",
  titulo: 'La puta'
},

]
}

public PelisComedia: InterfaceFilms = {
  genero: "Comedia",
  peli: [
    {
    src: "../assets/images/Comedia/casi300.webp",
    titulo: 'Casi 300'
},

{
  src: "../assets/images/Comedia/cazafantasmas.webp",
  titulo: 'Cazafantasmas'
},

{
  src: "../assets/images/Comedia/dictador.webp",
  titulo: 'El dictador'
},

{
  src: "../assets/images/Comedia/erasehollywood.webp",
  titulo: 'Érase una vez en Hollywood'
},

{
  src: "../assets/images/Comedia/family guy.webp",
  titulo: 'Family Guy'
},

{
  src: "../assets/images/Comedia/juerga.webp",
  titulo: 'Cazafantasmas'
},

{
  src: "../assets/images/Comedia/ted2.webp",
  titulo: 'Ted 2'
},
]
}

public PelisTop: InterfaceFilms = {
  genero: "Top 10",
  peli: [
    {
    src: "../assets/images/Top10/1-papel.webp",
    titulo: 'Casi 300'
},

{
  src: "../assets/images/Top10/2-reina.webp",
  titulo: 'Cazafantasmas'
},

{
  src: "../assets/images/Top10/3-titanes.webp",
  titulo: 'Cazafantasmas'
},

{
  src: "../assets/images/Top10/4-lostinspace.webp",
  titulo: 'Cazafantasmas'
},

{
  src: "../assets/images/Top10/5-dondecaben.webp",
  titulo: 'Cazafantasmas'
},
]
}

/* Esta ultima llave es la de class */
}

  



