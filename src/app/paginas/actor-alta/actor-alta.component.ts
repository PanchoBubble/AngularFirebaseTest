import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  actor: Actor ;

  constructor(private storeService:FirestoreServiceService) {
    this.actor = new Actor();
  }

  addActor(){
    this.storeService.addTolist(this.actor, 'actor', '/actores/listado', ()=> {})
  }

  handleSelect = (pais:Pais) => {
    this.actor.pais = pais
  }


  ngOnInit(): void {
  }

}
