import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';
import { WhereFilterOp } from '@firebase/firestore-types';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class FirestoreServiceService {

  constructor(private bd: AngularFirestore, public router: Router ) { }

  getList(path: 'pelicula'|'actor'){
    return this.bd.collection(path).valueChanges({idField: 'docID'})
  }

  addTolist(instance:Pelicula|Actor, path: 'pelicula'|'actor', redirect?:string, callback?:Function){
    return this.bd.collection(path).add({...instance}).then( (res) => {
      if (callback){ callback() }
      if (redirect){
        this.router.navigate([redirect])
      }
      return res
    })
  }

  filter(path:'pelicula'|'actor', attr:string, q:string, operator:WhereFilterOp='=='){
    return this.bd.collection(path, ref => ref.where(attr, operator, q )).valueChanges(
      {idField: 'docID'}
    )
  }

  deleteInstance(path:'pelicula'|'actor', id:string){
    return this.bd.collection(path).doc(id).delete()
  }

}
