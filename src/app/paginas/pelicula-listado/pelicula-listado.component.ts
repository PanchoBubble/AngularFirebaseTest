import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  peliculas:  Observable<any>;
  constructor(private storeService:FirestoreServiceService) {
    this.peliculas = storeService.getList('pelicula')
  }

  ngOnInit(): void {
  }

}
