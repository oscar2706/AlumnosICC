import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlumnoNavBarComponent } from "./alumno-nav-bar/alumno-nav-bar.component";
import { AlumnoPanelComponent } from "./alumno-panel/alumno-panel.component";
import { AlumnoProyeccionComponent } from "./alumno-proyeccion/alumno-proyeccion.component";
import { AlumnoMateriasComponent } from "./alumno-materias/alumno-materias.component";
import { AlumnoMateriaComponent } from "./alumno-materia/alumno-materia.component";
import { AlumnoOptativasComponent } from "./alumno-optativas/alumno-optativas.component";
import { AlumnoVentanaMateriasComponent } from "./alumno-ventana-materias/alumno-ventana-materias.component";
import { AlumnoVentanaOptativasComponent } from "./alumno-ventana-optativas/alumno-ventana-optativas.component";
import { AlumnoVentanaProyeccionComponent } from "./alumno-ventana-proyeccion/alumno-ventana-proyeccion.component";
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AlumnoNavBarComponent,
    AlumnoPanelComponent,
    AlumnoProyeccionComponent,
    AlumnoMateriasComponent,
    AlumnoMateriaComponent,
    AlumnoOptativasComponent,
    AlumnoVentanaMateriasComponent,
    AlumnoVentanaOptativasComponent,
    AlumnoVentanaProyeccionComponent
  ],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  exports: [AlumnoVentanaMateriasComponent, AlumnoVentanaOptativasComponent, AlumnoVentanaProyeccionComponent]
})
export class AlumnoModule {}
