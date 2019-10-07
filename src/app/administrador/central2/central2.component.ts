import { Component, OnInit } from '@angular/core';
interface Country {
  name: string;
  area: number;
  materia:number;
  materia2:number;

}

const COUNTRIES: Country[] = [
  {
    name: 'Otoño 2016',
    area: 17,
    materia: 5,
    materia2: 8
  },
  {
    name: 'Primavera 2017',
    area: 25,
    materia: 5,
    materia2: 3
  },
  {
    name: 'Verano 2017',
    area: 35,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Otoño 2017',
    area: 36,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Primavera 2018',
    area: 14,
    materia: 6,
    materia2: 4
  },
  {
    name: 'Verano 2018',
    area: 33,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Otoño 2018',
    area: 15,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Primavera 2019',
    area: 19,
    materia: 8,
    materia2: 4
  },
  {
    name: 'Verano 2019',
    area: 21,
    materia: 6,
    materia2: 4
  },
  {
    name: 'Otoño 2019',
    area: 32,
    materia: 2,
    materia2: 4
  },
  
];
@Component({
  selector: 'app-central2',
  templateUrl: './central2.component.html',
  styleUrls: ['./central2.component.css']
})
export class Central2Component implements OnInit {
  
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
