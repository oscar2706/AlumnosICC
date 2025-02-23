import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alumno-panel',
  templateUrl: './alumno-panel.component.html',
  styleUrls: ['./alumno-panel.component.css']
})
export class AlumnoPanelComponent implements OnInit {

  @Input() materiasSeleccionadas: string[];
  @Input() ventanaAbierta:number;
  @Input() matricula: string;
  @Output() avanceGuardado = new EventEmitter<boolean>();
  avance_guardado = false;
  porcentajeAvance: number;
  semestreSeleccionado: number;
  enFechaAvance: boolean = false;
  alumno: Alumno;

  constructor(private alumnoService: AlumnoService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.semestreSeleccionado = 1;

    this.alumnoService.getAlumno(this.matricula).subscribe(data => {
      this.alumno = data;
    });

    this.alumnoService.getCredits(this.matricula).subscribe(credits => {
      this.porcentajeAvance = credits/281*100;
    });

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

  guardado() {
    switch(this.ventanaAbierta) {
      case 1:
        this.avanceGuardado.emit(true);
        this.avance_guardado = true;
        break;
      case 2:
        this.avanceGuardado.emit(true);
        this.avance_guardado = true;
        break;
      case 3:
        this.alumnoService.updateAlumnoProyeccionRealizada(this.alumno.matricula).subscribe();
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var agno = fecha.getFullYear();
        var hoy = agno + '-' + mes + '-' + dia;
        for(var i=0; i<this.materiasSeleccionadas.length; i++) {
          this.alumnoService.createMateriaProyeccion(this.alumno.matricula, this.materiasSeleccionadas[i], hoy).subscribe();
        }
        break;
    }
  }

  cambioSemestre(valor) {
    console.log(valor);
    this.semestreSeleccionado = valor; 
  }
}
