import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  query_pelicula:string = '';
  query_actor:string = '';
  peliculas:  Observable<any> = new Observable();
  actores:  Observable<any> = new Observable();

  constructor(private storeService:FirestoreServiceService) {
  }

  searchPelicula(){
    this.actores = new Observable();
    this.peliculas = this.storeService.filter(
      'pelicula', 'nombre', this.query_pelicula
    )
    console.log(this.peliculas);

  }

  searchActor(){
    this.actores = this.storeService.filter(
      'actor', 'nombre', this.query_actor
    )
    this.peliculas = new Observable();
  }

  ngOnInit(): void {
  }

}
