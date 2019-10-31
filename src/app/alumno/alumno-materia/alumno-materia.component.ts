import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Materia } from '../../models/materia'
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit {
  @Input() datos: Materia = {
    clave: 'a',
    nombre: 'a',
    creditos: 0,
    semestre: 0,
    area: 'No',
    optativa: false,
    marcada : 0
  };

  dentro = false;
  enFechaAvance: boolean = false;

  constructor (private alumnoService: AlumnoService) { }

  ngOnInit () {
    this.alumnoService.getFechasAvance().subscribe(avance => {
      let fechaActual = new Date();
      avance.forEach(element => {
        let inicio = new Date(element.fecha_inicio);
        let fin = new Date(element.fecha_fin);
        if (fechaActual >= inicio && fechaActual <= fin)
          this.enFechaAvance = true;
      });
    });
  }

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
