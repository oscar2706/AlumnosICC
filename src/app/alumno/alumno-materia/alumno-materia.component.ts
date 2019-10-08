import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Materia } from '../../models/materia'
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit, OnChanges {
  @Input() datos: Materia = {
    clave: 'a',
    nombre: 'a',
    creditos: 0,
    semestre: 0,
    area: 'No',
    optativa: false,
    marcada : false
  };

  constructor (private alumnoService: AlumnoService) {
  }

  ngOnInit () {
  }

  ngOnChanges () {
  }

  onMarca () {

  }

}
