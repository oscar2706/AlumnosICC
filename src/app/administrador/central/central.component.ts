import { Component, OnInit, PipeTransform } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdministradorService } from '../../services/administrador.service';
import { Alumno } from '../../models/alumno';
import { DecimalPipe } from "@angular/common";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-contasenaRestaurada.component.html'
  
})
export class NgbdModalContent {
  name:string;

  constructor(public activeModal: NgbActiveModal, private administradorService: AdministradorService) {}
}

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css'], 
  providers: [DecimalPipe]
  
})
export class CentralComponent implements OnInit {
  alumnos: Alumno[];
  pageSize: number = 30;
  alumnoSeleccionado:string;
  nombreSeleccionado: string;
  defseccion:number=0;
  seleccionAlumno:number=0;
  alumnos$: Observable<Alumno[]>;
  filter = new FormControl("");

  constructor( private pipe: DecimalPipe, private modalService: NgbModal, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.getAlumnos().subscribe(data => {
      this.alumnos = data;
      this.alumnos$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  seleccionarAlumno(matricula, nombre) {
    if(this.alumnoSeleccionado == matricula) {
      this.alumnoSeleccionado = "";
      this.nombreSeleccionado=nombre;
      this.seleccionAlumno=0;
    }
    else {
      this.alumnoSeleccionado = matricula;
      this.nombreSeleccionado=nombre;
      this.seleccionAlumno=1;
    }
  }
    search(text: string, pipe: PipeTransform): Alumno[] {
      return this.alumnos.filter(alumno => {
        const term = text.toLowerCase();
        return alumno.nombre.toLowerCase().includes(term);
      });
  
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.nombreSeleccionado;
    this.prueba();
  }

  prueba() {
    //Esta función básicamente debe de estar en el modal de confirmación
    //Se le debe dar un nombre más representativo a la función y se debe de pasar el valor de la matrícula al modal
    //Se debe asegurar de que ya se haya seleccionado un alumno para poder abrir el modal
    this.administradorService.updateAlumnosPassword(this.alumnoSeleccionado).subscribe(data => {
      console.log(data);
    });
  }
}
