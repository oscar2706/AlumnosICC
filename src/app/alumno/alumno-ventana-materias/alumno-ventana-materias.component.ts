import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-ventana-materias',
  templateUrl: './alumno-ventana-materias.component.html',
  styleUrls: ['./alumno-ventana-materias.component.css']
})
export class AlumnoVentanaMateriasComponent implements OnInit {
  matricula: string;
  alumno: Alumno;
  vistaSeleccionada = 1;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.matricula = this.alumnoService.getAcceso();
  }

}
