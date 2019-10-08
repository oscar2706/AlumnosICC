import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-ventana-optativas',
  templateUrl: './alumno-ventana-optativas.component.html',
  styleUrls: ['./alumno-ventana-optativas.component.css']
})
export class AlumnoVentanaOptativasComponent implements OnInit {
  matricula: string;
  alumno: Alumno;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.matricula = this.alumnoService.getAcceso();
  }

}
