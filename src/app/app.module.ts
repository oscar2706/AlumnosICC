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
import { LoginComponent, LoginModalComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    AlumnoModule,
    CoordinadorModule,
    TutorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(), 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]
})
export class AppModule { }
