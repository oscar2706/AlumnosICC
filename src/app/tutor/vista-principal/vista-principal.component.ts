import { Component, OnInit, Input, PipeTransform } from "@angular/core";
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TutorService } from '../../services/tutor.service';
import { AlumnoService } from '../../services/alumno.service'
import { Alumno } from '../../models/alumno';
import { Seccion } from '../../models/seccion';
import { Router } from '@angular/router';

@Component({
  selector: "app-vista-principal",
  templateUrl: "./vista-principal.component.html",
  styleUrls: ["./vista-principal.component.css"],
  providers: [DecimalPipe]
})
export class VistaPrincipalComponent implements OnInit {
  @Input() numeroTrabajador;
  pageSize: number = 10;
  alumnos: Alumno[];
  alumnos$: Observable<Alumno[]>;
  secciones: Seccion[];
  seccionSeleccionada: number;
  alumnoSeleccionado: string;
  filter = new FormControl("");

  constructor( private pipe: DecimalPipe, private tutorService: TutorService, private router: Router, private alumnoService: AlumnoService
  ) {}

  ngOnInit() {
    this.tutorService.getSeccionesFromTrabajador(this.numeroTrabajador).subscribe(data => {
      this.secciones = data;
      if(this.secciones.length > 0) {
        this.seccionSeleccionada = this.secciones[0].id;
        this.tutorService.getAlumnosFromSeccion(this.secciones[0].id).subscribe(data => {
          this.alumnos = data;
          this.alumnos$ = this.filter.valueChanges.pipe(
            startWith(""),
            map(text => this.search(text, this.pipe))
          );
        });
      }
    })
  }

  cambiarSeccion() {
    this.tutorService.getAlumnosFromSeccion(this.seccionSeleccionada).subscribe(data => {
      this.alumnos = data;
      this.alumnos$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  seleccionarAlumno(matricula) {
    this.alumnoService.accesoCorrecto(matricula);
    this.router.navigate(["/alumno/materias"]);
  }

  search(text: string, pipe: PipeTransform): Alumno[] {
    return this.alumnos.filter(alumno => {
      const term = text.toLowerCase();
      return alumno.nombre.toLowerCase().includes(term);
    });
  }
}
