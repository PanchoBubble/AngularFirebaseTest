import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  pelicula: Pelicula ;

  constructor(private storeService:FirestoreServiceService) {
    this.pelicula = new Pelicula();
  }

  addMovie(){
    this.storeService.addTolist(this.pelicula, 'pelicula', '/peliculas/listado', ()=> {})
  }


  ngOnInit(): void {
  }

}
