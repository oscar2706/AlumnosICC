import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-alumno-materias',
  templateUrl: './alumno-materias.component.html',
  styleUrls: ['./alumno-materias.component.css']
})
export class AlumnoMateriasComponent implements OnInit, OnDestroy {
  subscription;

  materias: any;
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit () {
    // this.alumnoService.getMaterias().pipe(
    //   map(data => data.filter(materia => materia.semestre == 1))
    // ).subscribe(data => {
    //   this.materias1 = data;
    //   console.log(this.materias1);
    // });
    this.subscription = this.alumnoService.getMaterias().subscribe(data => {
      this.materias = data;
      console.log(this.materias);
    });

  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
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
