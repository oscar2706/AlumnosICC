import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service'
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-alumno-materias-responsivo',
  templateUrl: './alumno-materias-responsivo.component.html',
})
export class AlumnoMateriasResponsivoComponent implements OnInit {
  semestre1:  Materia[] = [];
  semestre2:  Materia[] = [];
  semestre3:  Materia[] = [];
  semestre4:  Materia[] = [];
  semestre5:  Materia[] = [];
  semestre6:  Materia[] = [];
  semestre7:  Materia[] = [];
  semestre8:  Materia[] = [];
  semestre9:  Materia[] = [];
  semestre10:  Materia[] = [];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit () {
    this.alumnoService.getMapa().subscribe(data => {
      this.semestre1 = data.filter(materia => materia.semestre == 1);
      this.semestre2 = data.filter(materia => materia.semestre == 2);
      this.semestre3 = data.filter(materia => materia.semestre == 3);
      this.semestre4 = data.filter(materia => materia.semestre == 4);
      this.semestre5 = data.filter(materia => materia.semestre == 5);
      this.semestre6 = data.filter(materia => materia.semestre == 6);
      this.semestre7 = data.filter(materia => materia.semestre == 7);
      this.semestre8 = data.filter(materia => materia.semestre == 8 && !materia.optativa);
      this.semestre9 = data.filter(materia => materia.semestre == 9 && !materia.optativa);
      this.semestre10 = data.filter(materia => materia.semestre == 10);
    });
  }

}
