import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoNavBarComponent } from './alumno-nav-bar/alumno-nav-bar.component';
import { AlumnoPanelComponent } from './alumno-panel/alumno-panel.component';
import { AlumnoProyeccionComponent } from './alumno-proyeccion/alumno-proyeccion.component';

@NgModule({
  declarations: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent],
  imports: [
    CommonModule
  ],
  exports: [AlumnoNavBarComponent, AlumnoPanelComponent, AlumnoProyeccionComponent]
})
export class AlumnoModule { }
