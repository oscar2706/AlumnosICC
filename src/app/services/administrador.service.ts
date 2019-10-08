import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Proyeccion } from '../models/proyeccion';
import { Avance } from '../models/avance';
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
    return this.http.put<Alumno>(this.API + '/alumnos/' + matricula, {'password': matricula});
  }

  createProyeccion(fecha_inicio, fecha_cierre) {
    return this.http.post<Proyeccion>(this.API + '/proyecciones', {'fecha_inicio': fecha_inicio, 'fecha_fin': fecha_cierre});
  }

  createAvance(fecha_inicio, fecha_cierre) {
    return this.http.post<Avance>(this.API + '/avances', {'fecha_inicio': fecha_inicio, 'fecha_fin': fecha_cierre});
  }
}
