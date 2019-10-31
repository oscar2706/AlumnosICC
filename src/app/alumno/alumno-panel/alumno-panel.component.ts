import { Component, OnInit, Input } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-panel',
  templateUrl: './alumno-panel.component.html',
  styleUrls: ['./alumno-panel.component.css']
})
export class AlumnoPanelComponent implements OnInit {

  @Input() materiasSeleccionadas: string[];
  @Input() ventanaAbierta:number;
  @Input() matricula: string;
  porcentajeAvance: number;
  alumno: Alumno;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumno(this.matricula).subscribe(data => {
      this.alumno = data;
    });

    this.alumnoService.getCredits(this.matricula).subscribe(credits => {
      console.log('credits');
      console.log(credits);
      this.porcentajeAvance = credits/281*100;
    });
  }

  guardado() {
    switch(this.ventanaAbierta) {
      case 1:
        break;
      case 2:
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
}
