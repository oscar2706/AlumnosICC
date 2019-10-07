import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-alumno-materias',
  templateUrl: './alumno-materias.component.html',
  styleUrls: ['./alumno-materias.component.css']
})
export class AlumnoMateriasComponent implements OnInit {
  materias: any;
  materias1: any;
  materias2: any;
  materias3: any;
  materias4: any;
  materias5: any;
  materias6: any;
  materias7: any;
  materias8: any;
  materias9: any;
  materias10: any;
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit () {
    // this.alumnoService.getMaterias().pipe(
    //   map(data => data.filter(materia => materia.semestre == 1))
    // ).subscribe(data => {
    //   this.materias1 = data;
    //   console.log(this.materias1);
    // });
    this.alumnoService.getMaterias().subscribe(data => {
      this.materias = data;
      this.materias1 = data.filter(materia => materia.semestre == 1);
      this.materias2 = data.filter(materia => materia.semestre == 2);
      this.materias3 = data.filter(materia => materia.semestre == 3);
      this.materias4 = data.filter(materia => materia.semestre == 4);
      this.materias5 = data.filter(materia => materia.semestre == 5);
      this.materias6 = data.filter(materia => materia.semestre == 6);
      this.materias7 = data.filter(materia => materia.semestre == 7);
      this.materias8 = data.filter(materia => materia.semestre == 8);
      this.materias9 = data.filter(materia => materia.semestre == 9);
      this.materias10 = data.filter(materia => materia.semestre == 10);
      // console.log(this.materias);
      // console.log(this.materias1);
      // console.log(this.materias2);
      // console.log(this.materias3);
      // console.log(this.materias4);
      // console.log(this.materias5);
      // console.log(this.materias6);
      // console.log(this.materias7);
      // console.log(this.materias8);
      // console.log(this.materias9);
      // console.log(this.materias10);
    });
  }

  getMateria (nombre: string) {
    this.materias.forEach(materia => {
      if (materia.nombre == nombre) {
        console.log(materia);
        return materia;
      }
    });
  }

}
