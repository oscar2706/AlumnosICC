import { Component, OnInit, Output, EventEmitter, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AlumnoService } from '../../services/alumno.service';
import { Materia } from '../../models/materia';

@Component({
  selector: 'app-alumno-proyeccion',
  templateUrl: './alumno-proyeccion.component.html',
  styleUrls: ['./alumno-proyeccion.component.css'],
  providers: [DecimalPipe]
})
export class AlumnoProyeccionComponent implements OnInit {
  pageSize:number = 10;
  materiaRecorrido:number;
  materiaNueva:number;
  @Output() materiasSeleccionadas = new EventEmitter<string[]>();
  materiasProyeccion:string[] = [];
  private _success = new Subject<string>();
  successMessage: string;
  materiasDisponibles: Materia [];
  materiasDisponibles$: Observable<Materia[]>;
  filter = new FormControl("");

  constructor(private pipe: DecimalPipe, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    for(var i=0; i<7; i++) {
      this.materiasProyeccion[i] = "";
    }
    
    this.materiasSeleccionadas.emit(this.materiasProyeccion);

    this.alumnoService.getMateriasDisponiblesProyeccion().subscribe(data => {
      this.materiasDisponibles = data;
      this.materiasDisponibles$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      )
    });
  }

  seleccionarMateria(id) {
    this.materiaRecorrido=0;
    this.materiaNueva = 0;

    for(var i=0; i<7; i++) {
      if(this.materiasProyeccion[i] == id) {
        //console.log("La materia ya estaba marcada");
        this.materiasProyeccion[i] = "";
        //console.log("Ruptura del ciclo de búsqueda");
        break;
      }
      else {
        //console.log("Iteracion " + i+1);
        this.materiaRecorrido++;
      }
    }

    if(this.materiaRecorrido == 7) {
      //console.log("La materia no está marcada");
      this.materiaNueva = 1;
    }

    this.materiaRecorrido = 0;

    if(this.materiaNueva == 1) {
      for(var i=0; i<7; i++) {
        if(this.materiasProyeccion[i] == "") {
          //console.log("Materia marcada");
          this.materiasProyeccion[i] = id;
          //console.log("Ruptura del ciclo de marcado");
          break;
        } else {
          //console.log("Iteracion " + i+1);
          this.materiaRecorrido ++;
        }
      }
    }

    if(this.materiaRecorrido == 7 && this.materiaNueva) {
      this._success.next("Ya has seleccionado el número máximo de materias(7)");
    }

    this.materiasSeleccionadas.emit(this.materiasProyeccion);
  }

  materiaSeleccionada(id) {
    for(var i=0; i<7; i++) {
      if(this.materiasProyeccion[i] == id) {
        return true;
      }
    }
    return false;
  }

  search(text: string, pipe: PipeTransform): Materia[] {
    return this.materiasDisponibles.filter(materia => {
      const term = text.toLowerCase();
      return materia.nombre.toLowerCase().includes(term);
    });
  }
}
