import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service'
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-alumno-materias',
  templateUrl: './alumno-materias.component.html',
  styleUrls: ['./alumno-materias.component.css']
})
export class AlumnoMateriasComponent implements OnInit, OnDestroy {
  subscription;

  materias: Materia[] = [];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit () {
    this.subscription = this.alumnoService.getMapa().subscribe(data => {
      this.materias = data;
    });
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  getMateria (clave: string): Materia {
    let materia_encontrada: Materia;
    this.materias.forEach(materia => {
      if (materia.clave == clave) {
        // console.log('materia encontrada');
        // console.log(materia);
        materia_encontrada = materia;
      }
    });
    return materia_encontrada;
  }

}
