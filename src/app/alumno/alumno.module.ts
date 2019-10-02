import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlumnoNavBarComponent } from './alumno-nav-bar/alumno-nav-bar.component';
import { AlumnoPanelComponent } from './alumno-panel/alumno-panel.component';
import { AlumnoProyeccionComponent } from './alumno-proyeccion/alumno-proyeccion.component';
import { AlumnoMateriasComponent } from './alumno-materias/alumno-materias.component';
import { AlumnoMateriaComponent } from './alumno-materia/alumno-materia.component';


@NgModule({
  declarations: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent, AlumnoMateriasComponent, AlumnoMateriaComponent],
  imports: [
    CommonModule, NgbModule, FormsModule, ReactiveFormsModule
  ],
  exports: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent, AlumnoMateriaComponent]
})
export class AlumnoModule { }
