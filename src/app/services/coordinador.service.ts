import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trabajador } from '../models/trabajador';
import { Seccion } from '../models/seccion';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorService {
  API = 'http://127.0.0.1:8000';
  constructor (private http: HttpClient) { }

  getTrabajadores () {
    return this.http.get<Trabajador []>(this.API + '/trabajadores');
  }

  getSecciones () {
    return this.http.get<Seccion []>(this.API + '/secciones');
  }

  getSeccionesFromTrabajador (numeroTrabajador) {
    return this.http.get<Seccion []>(this.API + '/trabajadores/' + numeroTrabajador + '/secciones');
  }

  //ToDo:
  /*
  Se requiere la función para poder asignar el tutor a la seccion seleccionada
  Paso de parámetros, probablemente el número de trabajador y el id de la sección
  Petición tipo POST según yo
  */
}
