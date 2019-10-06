import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdministradorModule } from './administrador/administrador.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CoordinadorModule } from './coordinador/coordinador.module';
import { TutorModule } from './tutor/tutor.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AgGridModule.withComponents(null),
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    AlumnoModule,
    CoordinadorModule,
    TutorModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
