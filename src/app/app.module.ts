import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AdministradorModule } from './administrador/administrador.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CoordinadorModule } from './coordinador/coordinador.module';
import { TutorModule } from './tutor/tutor.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    AlumnoModule,
    CoordinadorModule,
    TutorModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
