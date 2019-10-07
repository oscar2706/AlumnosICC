import { Component, OnInit,PipeTransform} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Grupos Asignados</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
 name:string;

  constructor(public activeModal: NgbActiveModal) {}
}

interface Country {
  name: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Abraham Sanchez',
    flag: 'f/f3/Flag_of_Russia.svg',

  },
  {
    name: 'Carlos Armando Rios',
    flag: 'c/cf/Flag_of_Canada.svg',
  
  },
  {
    name: 'Josefina Guerrero Garcia',
    flag: 'a/a4/Flag_of_the_United_States.svg',
  
  },
  {
    name: 'Bernardo Parra',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',

  }
];


function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)

  });
}

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css'],
  providers: [DecimalPipe]
})


export class VisualizarComponent implements OnInit {

  countries$: Observable<Country[]>;
  filter = new FormControl('');
  
  PaisSeleccionado: string;
  constructor(pipe: DecimalPipe, private modalService: NgbModal) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
  ngOnInit() {
  }
  onRowClicked(row){
    
    this.PaisSeleccionado=row;
    console.log(this.PaisSeleccionado);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.PaisSeleccionado;
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.PaisSeleccionado;
  }


}
