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

  updateSeccion (idSeccion, noTrabajador) {
    return this.http.put<Seccion>(this.API + '/secciones/' + idSeccion, {'trabajador_id': noTrabajador});
  }
}
