import { Component, OnInit, PipeTransform } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { CoordinadorService } from "../../services/coordinador.service";
import { Trabajador } from "../../models/trabajador";
import { Seccion } from "../../models/seccion";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"],
  providers: [DecimalPipe]
})
export class BusquedaComponent implements OnInit {
  pageSize=8;
  tutores: Trabajador[];
  tutores$: Observable<Trabajador[]>;
  secciones: Seccion[];
  tutorSeleccionado: string;
  seccionSeleccionada: string;
  seleccionTutor: number = 0;
  seleccionSeccion: number = 0;
  filter = new FormControl("");

  constructor(
    private pipe: DecimalPipe,
    private coordinadorService: CoordinadorService
  ) {}

  ngOnInit() {
    this.coordinadorService.getTrabajadores().subscribe(data => {
      this.tutores = data;
      this.tutores$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      );
    });

    this.coordinadorService.getSecciones().subscribe(data => {
      this.secciones = data;
    });
  }

  seleccionarTutor(idTutor) {
    if (this.tutorSeleccionado != idTutor) {
      this.tutorSeleccionado = idTutor;
      this.seleccionTutor = 1;
    } else {
      this.tutorSeleccionado = "";
      this.seleccionTutor = 0;
    }
  }

  seleccionarSeccion(idSeccion) {
    if (this.seccionSeleccionada != idSeccion) {
      this.seccionSeleccionada = idSeccion;
      this.seleccionSeccion = 1;
    } else {
      this.seccionSeleccionada = "";
      this.seleccionSeccion = 0;
    }
  }

  search(text: string, pipe: PipeTransform): Trabajador[] {
    return this.tutores.filter(tutor => {
      const term = text.toLowerCase();
      return tutor.nombre.toLowerCase().includes(term);
    });
  }

  prueba() {
    //cambiar el nombre a la función por algo más representativo y pasar los valores del tutor y la seccion seleccionada. 
    //Verificar que sí se esten reaizando los cambios y agregar lo del modal
    this.coordinadorService.updateSeccion('1', '100524845').subscribe(data => {
      console.log(data);
    });
  }
}
