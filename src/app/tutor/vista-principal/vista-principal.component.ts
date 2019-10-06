import { Component, OnInit } from "@angular/core";
import { AlumnoService } from "../../services/alumno.service";
import { CoordinadorService } from "../../services/coordinador.service";
import { AdministradorService } from "../../services/administrador.service";
import { Alumno as AlumnoInterface } from "../../models/alumno";
import { Observable } from "rxjs";
import { DatePipe } from "@angular/common";
interface Alumno {
  id?: number;
  name: string;
  flag: string;
  area: number;
}

const ALUMNOS: Alumno[] = [
  {
    name: "Russia",
    flag: "f/f3/Flag_of_Russia.svg",
    area: 17075200
  },
  {
    name: "France",
    flag: "c/c3/Flag_of_France.svg",
    area: 640679
  },
  {
    name: "Germany",
    flag: "b/ba/Flag_of_Germany.svg",
    area: 357114
  },
  {
    name: "Portugal",
    flag: "5/5c/Flag_of_Portugal.svg",
    area: 92090
  },
  {
    name: "Canada",
    flag: "c/cf/Flag_of_Canada.svg",
    area: 9976140
  },
  {
    name: "Vietnam",
    flag: "2/21/Flag_of_Vietnam.svg",
    area: 331212
  },
  {
    name: "Brazil",
    flag: "0/05/Flag_of_Brazil.svg",
    area: 8515767
  },
  {
    name: "Mexico",
    flag: "f/fc/Flag_of_Mexico.svg",
    area: 1964375
  },
  {
    name: "United States",
    flag: "a/a4/Flag_of_the_United_States.svg",
    area: 9629091
  },
  {
    name: "India",
    flag: "4/41/Flag_of_India.svg",
    area: 3287263
  },
  {
    name: "Indonesia",
    flag: "9/9f/Flag_of_Indonesia.svg",
    area: 1910931
  },
  {
    name: "Tuvalu",
    flag: "3/38/Flag_of_Tuvalu.svg",
    area: 26
  },
  {
    name: "China",
    flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    area: 9596960
  }
];

@Component({
  selector: "app-vista-principal",
  templateUrl: "./vista-principal.component.html",
  styleUrls: ["./vista-principal.component.css"]
})
export class VistaPrincipalComponent implements OnInit {
  constructor(
    private alumnoService: AlumnoService,
    private coordinadorService: CoordinadorService,
    private administradorService: AdministradorService,
    public datePipe: DatePipe
  ) {}

  alumnos: Observable<any>;

  ngOnInit() {
    this.alumnoService.getAlumno("201700181").subscribe(data => {
      console.log(data);
    });

    this.alumnoService.getMateriasCursadas("201700181").subscribe(data => {
      console.log(data);
    });

    this.alumnoService.getAlumnosFromSeccion(1).subscribe(data => {
      console.log(data);
    });

    this.coordinadorService.getTrabajadores().subscribe(data => {
      console.log(data);
    });

    this.coordinadorService.getSecciones().subscribe(data => {
      console.log(data);
    });

    this.coordinadorService
      .getSeccionesFromTrabajador("100003466")
      .subscribe(data => {
        console.log(data);
      });

    this.administradorService.getProyecciones().subscribe(data => {
      //Ejemplo para formatear la fecha que se obtiene del servicio
      console.log(this.datePipe.transform(data[0].fecha_inicio, "dd/MM/yyyy"));
    });

    this.administradorService.updateAlumnosPassword('201700181').subscribe(data => {
      console.log(data);
    });

  }

  page = 1;
  pageSize = 6;
  collectionSize = ALUMNOS.length;

  get ALUMNOS(): Alumno[] {
    return ALUMNOS.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
