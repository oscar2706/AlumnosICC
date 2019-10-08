import { Component, OnInit } from "@angular/core";
import { AdministradorService } from "../../services/administrador.service";
import { NgbDateCustomParserFormatter } from "../../administrador/dateformat";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-barleft-adm",
  templateUrl: "./barleft-adm.component.html",
  styleUrls: ["./barleft-adm.component.css"],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})
export class BarleftAdmComponent implements OnInit {
  opcion = 1;
  model1;
  model2;
  fecha_inicio: string;
  fecha_cierre: string;

  constructor(private administradorService: AdministradorService) {}

  ngOnInit() {}
  defperiodo:number=0;
  
  prueba() {
    if (this.opcion == 1) {
      console.log("Prueba: " + this.opcion);
      this.fecha_inicio =
        this.model1.year + "-" + this.model1.month + "-" + this.model1.day;
      this.fecha_cierre =
        this.model2.year + "-" + this.model2.month + "-" + this.model2.day;

        console.log(this.fecha_inicio);
        console.log(this.fecha_cierre);

      this.administradorService
        .createProyeccion(this.fecha_inicio, this.fecha_cierre)
        .subscribe(data => {
          console.log(data);
        });
    } else {
      console.log("Prueba: " + this.opcion);
      this.fecha_inicio =
        this.model1.year + "-" + this.model1.month + "-" + this.model1.day;
      this.fecha_cierre =
        this.model2.year + "-" + this.model2.month + "-" + this.model2.day;
      this.administradorService
        .createAvance(this.fecha_inicio, this.fecha_cierre)
        .subscribe(data => {
          console.log(data);
        });
    }
  }
}
