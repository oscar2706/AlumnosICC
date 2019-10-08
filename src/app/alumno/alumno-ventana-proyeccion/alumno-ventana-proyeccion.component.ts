import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-ventana-proyeccion',
  templateUrl: './alumno-ventana-proyeccion.component.html',
  styleUrls: ['./alumno-ventana-proyeccion.component.css']
})
export class AlumnoVentanaProyeccionComponent implements OnInit {
  matricula: string;
  alumno: Alumno;
  public materiasSeleccionadas: string[];

  materiasProyeccion(materias: string[]) {
    this.materiasSeleccionadas = materias;
  }

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.matricula = this.alumnoService.getAcceso();
  }

}
