import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-alumno-proyeccion',
  templateUrl: './alumno-proyeccion.component.html',
  styleUrls: ['./alumno-proyeccion.component.css']
})
export class AlumnoProyeccionComponent implements OnInit {
  page:number = 1;
  pageSize:number = 10;
  collectionSize:number = COUNTRIES.length;
  materiaRecorrido:number;
  materiaNueva:number;
  @Output() materiasSeleccionadas = new EventEmitter<number[]>();
  materiasProyeccion:number[] = [];
  private _success = new Subject<string>();
  successMessage: string;

  constructor() { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    for(var i=0; i<7; i++) {
      this.materiasProyeccion[i] = 0;
    }
    
    this.materiasSeleccionadas.emit(this.materiasProyeccion);
  }

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  seleccionarMateria(id) {
    this.materiaRecorrido=0;
    this.materiaNueva = 0;

    for(var i=0; i<7; i++) {
      if(this.materiasProyeccion[i] == id) {
        this.materiasProyeccion[i] = 0;
        break;
      }
      else {
        this.materiaRecorrido++;
      }
    }

    if(this.materiaRecorrido == 7) {
      this.materiaNueva = 1;
    }

    this.materiaRecorrido = 0;

    if(this.materiaNueva == 1) {
      for(var i=0; i<7; i++) {
        if(this.materiasProyeccion[i] == 0) {
          this.materiasProyeccion[i] = id;
          break;
        } else {
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
}
