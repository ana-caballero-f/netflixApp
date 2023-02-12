
/* Interface de film */

export interface InterfaceFilms {
    genero: string;
    peli: PeliInterface[];
}
export interface PeliInterface {
    src: string;
    titulo: string
}

/* Forma abreviada 
Va a dar problema si hacemos un bucle
porque no va a iterar en imagen*/

/* export interface InterfaceFilms {
    genero: string;
    imagen: {
        src: string;
        titulo: string;
    }
} */