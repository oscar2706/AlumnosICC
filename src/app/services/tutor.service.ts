import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trabajador } from '../models/trabajador'
import { Alumno } from '../models/alumno';
import { Seccion } from '../models/seccion';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  API = 'http://127.0.0.1:8000';
  constructor (private http: HttpClient) { }

  getTrabajador(numeroTrabajador) {
    return this.http.get<Trabajador>(this.API + '/trabajadores/' + numeroTrabajador);
  }

  getSeccionesFromTrabajador (numeroTrabajador) {
    return this.http.get<Seccion []>(this.API + '/trabajadores/' + numeroTrabajador + '/secciones');
  }

  getAlumnosFromSeccion (idSeccion) {
    return this.http.get<Alumno []>(this.API + '/secciones/' + idSeccion + '/alumnos');
  }
}
