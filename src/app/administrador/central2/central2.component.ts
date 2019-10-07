import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { Proyeccion } from '../../models/proyeccion';

@Component({
  selector: 'app-central2',
  templateUrl: './central2.component.html',
  styleUrls: ['./central2.component.css']
})
export class Central2Component implements OnInit {
  proyecciones: Proyeccion[];
  page: number;
  pageSize: number;
  collectionSize: number;

  constructor(private administrador: AdministradorService) { }

  ngOnInit() {
    this.administrador.getProyecciones().subscribe(data => {
      this.proyecciones = data;
      this.page = 1;
      this.pageSize = 4;
      this.collectionSize = this.proyecciones.length;
      this.getProyecciones();
    });
  }

  getProyecciones(): Proyeccion[] {
    return this.proyecciones
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
