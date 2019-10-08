import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-optativas',
  templateUrl: './alumno-optativas.component.html',
  styleUrls: ['./alumno-optativas.component.css']
})
export class AlumnoOptativasComponent implements OnInit {
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
