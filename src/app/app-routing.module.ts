import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnoVentanaMateriasComponent } from './alumno/alumno-ventana-materias/alumno-ventana-materias.component';
import { AlumnoVentanaOptativasComponent } from './alumno/alumno-ventana-optativas/alumno-ventana-optativas.component';
import { AlumnoVentanaProyeccionComponent } from './alumno/alumno-ventana-proyeccion/alumno-ventana-proyeccion.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'alumno/materias', component: AlumnoVentanaMateriasComponent},
  {path: 'alumno/optativas', component: AlumnoVentanaOptativasComponent},
  {path: 'alumno/proyeccion', component: AlumnoVentanaProyeccionComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
