import { Component, OnInit } from '@angular/core';

interface Alumno {
  id?: number;
  name: string;
  flag: string;
  area: number;
}

const ALUMNOS: Alumno[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960
  }
];

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent {

  page = 1;
  pageSize = 6;
  collectionSize = ALUMNOS.length;

  get ALUMNOS(): Alumno[] {
    return ALUMNOS
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
