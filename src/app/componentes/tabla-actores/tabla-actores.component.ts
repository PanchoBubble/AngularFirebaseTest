import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent implements OnInit {
  @Input()
  get actores(): Observable<any>{ return this._actores; }
  set actores(actores: Observable<any>) {
    this._actores = actores;
  }

  private _actores : Observable<any> = new Observable()

  selectedActor : Actor = new Actor()

  constructor(private storeService:FirestoreServiceService) { }

  ngOnInit(): void {
  }

  handleDetails(actor:Actor ,id :string){
    this.selectedActor = actor
    this.selectedActor.id = id
  }

  handleCloseDetails(){
    this.selectedActor = new Actor
  }

  handleDelete(id:string){
    const confirmDelete = confirm("Estas que queres eliminar este actor?")
    if (!confirmDelete) return null
    return this.storeService.deleteInstance('actor', id).then(
      () => this.handleCloseDetails()
    )
  }
}
