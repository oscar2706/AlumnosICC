import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnoVentanaMateriasComponent } from './alumno/alumno-ventana-materias/alumno-ventana-materias.component';
import { AlumnoVentanaOptativasComponent } from './alumno/alumno-ventana-optativas/alumno-ventana-optativas.component';
import { AlumnoVentanaProyeccionComponent } from './alumno/alumno-ventana-proyeccion/alumno-ventana-proyeccion.component';
import { TutorVentanaPrincipalComponent } from './tutor/tutor-ventana-principal/tutor-ventana-principal.component';
import { PrincipalComponent } from './coordinador/principal/principal.component';
import { ResetPasswdComponent } from './administrador/reset-passwd/reset-passwd.component';
import { ProyeccionesComponent } from './administrador/proyecciones/proyecciones.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'alumno/materias', component: AlumnoVentanaMateriasComponent},
  {path: 'alumno/optativas', component: AlumnoVentanaOptativasComponent},
  {path: 'alumno/proyeccion', component: AlumnoVentanaProyeccionComponent},
  {path: 'tutor', component: TutorVentanaPrincipalComponent},
  {path: 'coordinador', component: PrincipalComponent},
  {path: 'administrador/restaurar', component: ResetPasswdComponent},
  {path: 'administrador/proyeccion', component: ProyeccionesComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
