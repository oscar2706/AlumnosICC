//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
    name: 'Josfina Guerrero Garcia',
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
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [DecimalPipe]
})
export class BusquedaComponent implements OnInit {


  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit() {
  }

}
