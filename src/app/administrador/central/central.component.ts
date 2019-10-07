import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


interface Country {
  id?:number;
  name: string;
  area: number;
  seccion:string;

}

const COUNTRIES: Country[] = [
  {
    name: 'Sarmiento Barrios Estefania',
    area: 17075200,
    seccion: '01-2017'
  },
  {
    name: 'Montiel Estrada Mayra vanessa ',
    area: 640679,
    seccion: '02-2017'
  },
  {
    name: 'Amador Barrientos Luis Leonardo',
    area: 357114,
    seccion: '03-2017'
  },
  {
    name: 'Rubio Quintero Rebeca',
    area: 92090,
    seccion: '01-2018'
  },
  {
    name: 'Patricio Hernández Oscar',
    area: 9976140,
    seccion: '02-2018'
  },
  {
    name: 'Lozada Mendoza Dylan Salomón',
    area: 331212,
    seccion: '02-2018'
  },
  {
    name: 'Hernández Cuacua Rosa Gabriela',
    area: 8515767,
    seccion: '03-2018'
  },
  {
    name: 'Sandra Danae Rosas Ortega',
    area: 1964375,
    seccion: '01-2019'
  },
  {
    name: 'Citlali Castillo Morales',
    area: 9629091,
    seccion: '02-2019'
  },
  {
    name: 'José Luis Morales González',
    area: 3287263,
    seccion: '01-2017'
  },
  {
    name: 'Victoria Rubio Quintero',
    area: 1910931,
    seccion: '02-2017'
  },
  {
    name: 'Ana Paula Sarmiento Barrios',
    area: 26,
    seccion: '03-2017'
  },
  {
    name: 'Lizbeth Gaspar Antonio',
    area: 9596960,
    seccion: '01-2018'
  }
];
@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  PaisSeleccionado:string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {}
  page = 1;
  pageSize = 4;
  defseccion=0;
  collectionSize = COUNTRIES.length;


  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  onRowClicked(row){
    
    this.PaisSeleccionado=row;
    console.log(this.PaisSeleccionado);
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Hola';
  }
}
