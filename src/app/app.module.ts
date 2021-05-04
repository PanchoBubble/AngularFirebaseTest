import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { HomeComponent } from './paginas/home/home.component';
import { PeliculaAltaComponent } from './paginas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './paginas/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './paginas/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './paginas/pelicula-listado/pelicula-listado.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    HomeComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculasComponent,
    ListadoPaisesComponent,
    TablaActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
