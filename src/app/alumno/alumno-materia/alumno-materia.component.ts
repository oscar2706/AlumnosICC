import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Materia } from '../../models/materia'
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent {
  @Input() datos: Materia = {
    clave: 'a',
    nombre: 'a',
    creditos: 0,
    semestre: 0,
    area: 'No',
    optativa: false,
    marcada : 0
  };

  constructor (private alumnoService: AlumnoService) { }

  onMarca () {
    if (this.datos.marcada) {
      this.alumnoService.deleteMateriaCursada(this.alumnoService.getAcceso(), this.datos.clave)
        .subscribe(respuesta => {
          // console.log('se desmarco:' + respuesta);
          if (respuesta == true) {
            this.datos.marcada = 0;
            // console.log('marcada = ' + this.datos.marcada);
          }
        });
    } else {
      this.alumnoService.createMateriaCursada(this.alumnoService.getAcceso(), this.datos.clave)
        .subscribe(respuesta => {
          // console.log('se marco:' + respuesta);
          if (respuesta == true) {
            this.datos.marcada = 1;
            // console.log('marcada = ' + this.datos.marcada);
          }
        });
    }
  }

}
