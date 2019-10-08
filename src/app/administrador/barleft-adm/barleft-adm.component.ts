import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { Proyeccion } from '../../models/proyeccion';
import { Avance } from '../../models/avance';

@Component({
  selector: 'app-barleft-adm',
  templateUrl: './barleft-adm.component.html',
  styleUrls: ['./barleft-adm.component.css']
})
export class BarleftAdmComponent implements OnInit {
  opcion=1;
  model1;
  model2;
  fecha_inicio: string;
  fecha_cierre: string;

  constructor(private administradorService: AdministradorService) { }

  ngOnInit() {
  }

  prueba() {
    if(this.opcion == 1) {
      console.log("Prueba: " + this.opcion);
      this.fecha_inicio = this.model1.year+"-"+this.model1.month+"-"+this.model1.day;
      this.fecha_cierre = this.model2.year+"-"+this.model2.month+"-"+this.model2.day;
      this.administradorService.createProyeccion(this.fecha_inicio, this.fecha_cierre).subscribe(data => {
        console.log(data);
      });
    }
    else {
      console.log("Prueba: " + this.opcion);
      this.fecha_inicio = this.model1.year+"-"+this.model1.month+"-"+this.model1.day;
      this.fecha_cierre = this.model2.year+"-"+this.model2.month+"-"+this.model2.day;
      this.administradorService.createAvance(this.fecha_inicio, this.fecha_cierre).subscribe(data => {
        console.log(data);
      });
    }
  }

}
