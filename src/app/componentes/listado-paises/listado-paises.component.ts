import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesApiService } from 'src/app/services/paises-api.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss']
})

export class ListadoPaisesComponent implements OnInit {

  selected : Pais|null = null

  paises : Pais[] = []
  filter : string = ""
  @Input() handleSelect: Function = () => {};

  constructor(private paisApiService : PaisesApiService) {
    paisApiService.getPaises().subscribe(
      (results: any) => {
        this.paises = results.map( (pais: any) => (
            {
              name: pais.name,
              flag: pais.flag,
              capital: pais.capital
            }
           )
        )
      }
    )
   }

  handleClick(pais:Pais){
    this.handleSelect(pais)
    this.selected = pais
  }

  getList(){
    if (this.filter){
      return this.paises.filter( pais => pais.name.includes(this.filter))
    }
    return this.paises
  }

  ngOnInit(): void {
  }

}
