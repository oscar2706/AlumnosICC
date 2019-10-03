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
    area: 17075200,
    materia: 244444,
    materia2: 4
  },
  {
    name: 'Primavera 2017',
    area: 640679,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Verano 2017',
    area: 357114,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Otoño 2017',
    area: 92090,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Primavera 2018',
    area: 9976140,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Verano 2018',
    area: 331212,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Otoño 2018',
    area: 8515767,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Primavera 2019',
    area: 1964375,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Verano 2019',
    area: 9629091,
    materia: 2,
    materia2: 4
  },
  {
    name: 'Otoño 2019',
    area: 3287263,
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
