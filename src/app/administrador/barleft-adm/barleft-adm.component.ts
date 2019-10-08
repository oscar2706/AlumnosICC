import { Component, OnInit } from '@angular/core';
import   {   NgbDateCustomParserFormatter }   from   '../../administrador/dateformat' ; 
import   {   NgbDateParserFormatter, NgbDateStruct }   from   '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barleft-adm',
  templateUrl: './barleft-adm.component.html',
  styleUrls: ['./barleft-adm.component.css'],
  providers :  [{ provide: NgbDateParserFormatter ,   useClass :   NgbDateCustomParserFormatter } ]
  
  
})
export class BarleftAdmComponent implements OnInit {

  model: NgbDateStruct;
  opcion=1;
  constructor() { }

  ngOnInit() {
  }

}
