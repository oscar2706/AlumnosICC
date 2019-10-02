import { Component, OnInit } from '@angular/core';
interface Country {
  name: string;
  area: number;

}

const COUNTRIES: Country[] = [
  {
    name: 'Sarmiento Barrios Estefania',
    area: 17075200
  },
  {
    name: 'Montiel Estrada Mayra vanessa ',
    area: 640679
  },
  {
    name: 'Amador Barrientos Luis Leonardo',
    area: 357114
  },
  {
    name: 'Rubio Quintero Rebeca',
    area: 92090
  },
  {
    name: 'Patricio Hernández Oscar',
    area: 9976140
  },
  {
    name: 'Lozada Mendoza Dylan Salomón',
    area: 331212
  },
  {
    name: 'Hernández Cuacua Rosa Gabriela',
    area: 8515767
  },
  {
    name: 'Sandra Danae Rosas Ortega',
    area: 1964375
  },
  {
    name: 'Citlali Castillo Morales',
    area: 9629091
  },
  {
    name: 'José Luis Morales González',
    area: 3287263
  },
  {
    name: 'Victoria Rubio Quintero',
    area: 1910931
  },
  {
    name: 'Ana Paula Sarmiento Barrios',
    area: 26
  },
  {
    name: 'Lizbeth Gaspar Antonio',
    area: 9596960
  }
];
@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {}
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
