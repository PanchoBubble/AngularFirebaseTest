export class Pelicula {
    id: string = '';
    nombre:string = '';
    tipo: 'terror'| 'comedia'| 'amor'| 'otros' = 'otros';
    fechaEstreno: string = '';
    cantidadPublico: number = 0;
    fotoPelicula: string = '';
}
