import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Proyeccion } from '../models/proyeccion';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  API = 'http://127.0.0.1:8000';
  constructor (private http: HttpClient) { }

  getAlumnos() {
    return this.http.get<Alumno []>(this.API + '/alumnos');
  }

  getProyecciones() {
    return this.http.get<Proyeccion []>(this.API + '/proyecciones');
  }

  getAlumnosFromSeccion (idSeccion) {
    return this.http.get<Alumno []>(this.API + '/secciones/' + idSeccion + '/alumnos');
  }

  updateAlumnosPassword(matricula) {
    return this.http.put<Alumno []>(this.API + '/alumnos/' + matricula, {'password': matricula});
  }

  //ToDo:
  /*
  Funcion 1:
  Se requiere la función para poder crear los nuevos periodos de las proyecciones
  Paso de parámetros, probablemente la fecha de inicio y la fecha de finalización de la proyección
  Petición tipo POST según yo

  Función 2:
  Se requiere la función para poder crear los nuevos periodos del marcado del avance
  Paso de parámetros, probablemente la fecha de inicio y la fecha de finalización del periodo de avance
  Petición tipo POST según yo 
  */
}
