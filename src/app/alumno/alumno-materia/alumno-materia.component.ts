import { Component, OnInit } from '@angular/core';

interface Materia {
  clave: number,
  nombre: string,
  creditos: number,
  semestre: number,
  optativa: number
}

@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit {

  materia: Materia = {clave: 1235, nombre: "Programación Concurrente y Paralela", creditos: 6, semestre: 7, optativa: 1};

  constructor() { }

  ngOnInit() {
  }

}
