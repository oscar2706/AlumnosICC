import { Component, OnInit, Input } from '@angular/core';
import { Materia } from '../../models/materia'
import { AlumnoService } from '../../services/alumno.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit {
  @Input() clave: string;
  cursada: boolean;
  materia: any = {clave: 1235, nombre: "Programación Concurrente y Paralela", creditos: 6, semestre: 7, optativa: 1};

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit () {
    if (this.clave) {
      console.log(this.clave);
      this.alumnoService.getMateria(this.clave).subscribe(data => {
        this.materia = data;
      });
    }
  }

}
