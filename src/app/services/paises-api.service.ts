import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PaisesApiService {

  paisesUrl:string = 'https://restcountries.eu/rest/v2/all'

  constructor(private http: HttpClient, ){}

  getPaises = () => { return this.http.get(this.paisesUrl) }
}
