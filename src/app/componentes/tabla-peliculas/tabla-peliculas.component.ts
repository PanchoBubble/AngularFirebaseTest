import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent implements OnInit {

  @Input()
  get peliculas(): Observable<any>{ return this._peliculas; }
  set peliculas(peliculas: Observable<any>) {
    this._peliculas = peliculas;
  }

  private _peliculas : Observable<any> = new Observable()

  selectedMovie : Pelicula = new Pelicula()

  constructor(private storeService:FirestoreServiceService) { }

  handleDelete(id:string){
    const confirmDelete = confirm("Estas que queres eliminar esta pelicula?")
    if (!confirmDelete) return null
    return this.storeService.deleteInstance('pelicula', id).then(
      () => this.handleCloseDetails()
    )
  }

  handleDetails(pelicula:Pelicula ,id :string){
    this.selectedMovie = pelicula
    this.selectedMovie.id = id
    console.log(this.selectedMovie);

  }

  handleCloseDetails(){
    this.selectedMovie = new Pelicula
  }

  ngOnInit(): void {
  console.log(this._peliculas);
  }

}
