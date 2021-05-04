import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './paginas/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './paginas/actor-listado/actor-listado.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { HomeComponent } from './paginas/home/home.component';
import { PeliculaAltaComponent } from './paginas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './paginas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'peliculas/alta', component: PeliculaAltaComponent},
  { path: 'peliculas/listado', component: PeliculaListadoComponent},
  { path: 'actores/alta', component: ActorAltaComponent},
  { path: 'actores/listado', component: ActorListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
