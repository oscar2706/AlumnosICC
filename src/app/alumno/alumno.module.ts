import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlumnoNavBarComponent } from './alumno-nav-bar/alumno-nav-bar.component';
import { AlumnoPanelComponent } from './alumno-panel/alumno-panel.component';
import { AlumnoProyeccionComponent } from './alumno-proyeccion/alumno-proyeccion.component';


@NgModule({
  declarations: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent],
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule
  ],
  exports: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent]
})
export class AlumnoModule { }
