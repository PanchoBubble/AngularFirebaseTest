import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  actores:  Observable<any>;
  constructor(private storeService:FirestoreServiceService) {
    this.actores = storeService.getList('actor')
  }

  ngOnInit(): void {
  }

}
