import { Component, OnInit, PipeTransform} from '@angular/core';
import { DecimalPipe, SlicePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CoordinadorService } from "../../services/coordinador.service";
import { Trabajador } from "../../models/trabajador";
import { Seccion } from "../../models/seccion";
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-visualizar.component.html'
})
export class NgbdModalContent implements OnInit{
  numeroTrabajador: string;
  nombre:string;
  seccionesTutor: Seccion[];

  constructor(public activeModal: NgbActiveModal, private coordinadorService: CoordinadorService) {
  }

  ngOnInit() {
    this.coordinadorService.getSeccionesFromTrabajador(this.numeroTrabajador).subscribe(data => {
      console.log(this.numeroTrabajador);
      this.seccionesTutor = data;
      console.log(this.seccionesTutor);
    });
  }
}

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
  providers: [DecimalPipe]
})
export class VisualizarComponent implements OnInit {
  page = 1;
  pageSize=10;
  tutores: Trabajador[];
  tutores$: Observable<Trabajador[]>;
  tutorSeleccionado: string;
  nombreSeleccionado: string;
  seleccionTutor: number = 0;
  filter = new FormControl('');

  constructor(private pipe: DecimalPipe, private modalService: NgbModal, private coordinadorService: CoordinadorService) {
  }

  ngOnInit() 
  {
    this.coordinadorService.getTrabajadores().subscribe(data => {
      this.tutores = data;
      this.tutores$ = this.filter.valueChanges.pipe(
        startWith(""),
        map(text => this.search(text, this.pipe))
      );
    });
  }

  seleccionarTutor(idTutor, nombreTutor) {
    if (this.tutorSeleccionado != idTutor) {
      this.tutorSeleccionado = idTutor;
      this.seleccionTutor = 1;
      this.nombreSeleccionado = nombreTutor;
      this.open();
    } else {
      this.tutorSeleccionado = "";
      this.seleccionTutor = 0;
      this.nombreSeleccionado = "";
    }
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.numeroTrabajador = this.tutorSeleccionado;
    modalRef.componentInstance.nombre = this.nombreSeleccionado;
  }

  search(text: string, pipe: PipeTransform): Trabajador[] {
    return this.tutores.filter(tutor => {
      const term = text.toLowerCase();
      return tutor.nombre.toLowerCase().includes(term);
    });
  }
}
