import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdministradorService } from '../../services/administrador.service';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Exito</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>La contraseña se restauro correctamente</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Ok</button>
    </div>
  `
})
export class NgbdModalContent {
  name:string;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  alumnos: Alumno[];
  pageSize: number = 30;
  alumnoSeleccionado:string;
  defseccion:number=0;

  constructor(private modalService: NgbModal, private administradorService: AdministradorService) { }

  ngOnInit() {
    this.administradorService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  seleccionarAlumno(matricula) {
    if(this.alumnoSeleccionado == matricula) {
      this.alumnoSeleccionado = "";
    }
    else {
      this.alumnoSeleccionado = matricula;
    }
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }

  prueba() {
    console.log("Prueba");
  }
}
