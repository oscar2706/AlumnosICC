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
  pageSize: number = 10;

  constructor(private administrador: AdministradorService) { }

  ngOnInit() {
    this.administrador.getProyecciones().subscribe(data => {
      this.proyecciones = data;
    });
  }
}
