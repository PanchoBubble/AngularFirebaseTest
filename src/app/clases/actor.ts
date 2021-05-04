import { Pais } from './pais';

export class Actor {
    id: string = "";
    nombre: string = "";
    apellido: string = "";
    foto: string = "";
    edad: number = 0;
    pais: Pais = new Pais();
}
