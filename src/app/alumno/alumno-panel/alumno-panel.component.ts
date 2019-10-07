import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-panel',
  templateUrl: './alumno-panel.component.html',
  styleUrls: ['./alumno-panel.component.css']
})
export class AlumnoPanelComponent implements OnInit {

  @Input() materiasSeleccionadas: number[];
  @Input() ventanaAbierta:number;
  @Input() matricula: string;
  alumno: Alumno;

  constructor(private router: Router, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumno(this.matricula).subscribe(data => {
      this.alumno = data;
    });
  }

  prueba() {
    if(this.ventanaAbierta == 3) {
      console.log(this.materiasSeleccionadas);
      this.router.navigate(['alumno/materias']);
    }
  }
}
