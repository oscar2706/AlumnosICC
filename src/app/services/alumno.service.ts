import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumno } from '../models/alumno';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API = 'http://127.0.0.1:8000';
  constructor (private http: HttpClient) { }

  getAlumno (matricula) {
    return this.http.get<Alumno>(this.API + '/alumnos/' + matricula);
  }

  getMateriasCursadas (matricula) {
    return this.http.get<Materia []>(this.API + '/alumnos/' + matricula + '/materias_cursadas');
  }

  getAlumnosFromSeccion (idSeccion) {
    return this.http.get<Alumno []>(this.API + '/secciones/' + idSeccion + '/alumnos');
  }
}
