import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Alumno } from '../models/alumno';
import { Materia } from '../models/materia';
import { MateriaCursada } from '../models/materiaCursada';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API = 'http://127.0.0.1:8000';
  matricula: string;
  materias_marcado: Array<string> = [];

  constructor (private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getAlumno (matricula) {
    return this.http.get<Alumno>(this.API + '/alumnos/' + matricula).pipe(catchError(this.handleError));
  }

  getMaterias() {
    return this.http.get<Materia []>(this.API + '/materias');
  }

  getMateria(clave: string) {
    return this.http.get<Materia>(this.API + '/materias/' + clave);
  }

  getMapa () {
    return this.http.get<Materia[]>(this.API + '/alumnos/' + this.matricula + '/mapa_materias');
  }

  getMateriasDisponiblesProyeccion () {
    return this.http.get<Materia[]>(this.API + '/proyecciones/materias_disponibles/' + this.matricula);
  }

  getMateriasCursadas (matricula) {
    return this.http.get<Materia []>(this.API + '/alumnos/' + matricula + '/materias_cursadas');
  }

  getMateriaMarcada (materia, clave) {
    return this.http.get<boolean>(this.API + '/materias_cursadas/marcada');
  }

  createMateriaCursada (matricula, clave) {
    return this.http.post<boolean>(this.API + '/materias_cursadas', {'matricula': matricula, 'clave': clave});
  }

  deleteMateriaCursada (matricula, clave) {
    let parametros = new HttpParams().set("matricula", matricula).set("clave", clave);

    return this.http.delete(this.API + '/materias_cursadas', { params: parametros });
  }

  updateAlumnoPassword(matricula, password) {
    return this.http.put<Alumno>(this.API + '/alumnos/' + matricula, {'password': password});
  }

  updateAlumnoProyeccionRealizada(matricula) {
    return this.http.put<Alumno>(this.API + '/alumnos/' + matricula, {'proyeccion_realizada': 1});
  }

  createMateriaProyeccion(matricula, clave, fecha) {
    return this.http.post(this.API + '/materias_proyecciones', {'matricula': matricula, 'clave': clave, 'fecha': fecha});
  }

  accesoCorrecto(matricula) {
    this.matricula = matricula;
  }

  getAcceso() {
    return this.matricula;
  }

  // Materias Marcadas
  addMateriaMarcada (clave : string) {
    this.materias_marcado.push(clave);
  }

  removeMateriaMarcada (clave: string) {
    const index = this.materias_marcado.indexOf(clave);
    console.log(index);
    if (index > -1)
      this.materias_marcado.splice(index, 1);
  }

  saveMateriasMarcadas () {
    this.materias_marcado.forEach(materia => {
      this.createMateriaCursada(this.getAcceso(), materia)
        .subscribe(respuesta => {
          console.log('se marco:' + respuesta);
        });
    });
  }

  //Proyeccion
}
