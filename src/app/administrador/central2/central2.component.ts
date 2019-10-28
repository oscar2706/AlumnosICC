import { Component, OnInit, Input } from '@angular/core';
import { AdministradorService } from '../../services/administrador.service';
import { Proyeccion } from '../../models/proyeccion';
import { Chart } from 'chart.js';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-reporte.html'
})
export class ModalReporte implements OnInit {
  @Input() fecha_inicio;
  @Input() fecha_fin;
  materias: string[];
  totales: number[];
  chart = [];

  constructor(private administrador: AdministradorService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.administrador.getResultadosProyeccion(this.fecha_inicio, this.fecha_fin).subscribe(data => {
      this.materias = new Array(data.length);
      this.totales = new Array(data.length);
      var i = 0;

      data.forEach(element => {
        this.materias[i] = element.nombre;
        this.totales[i] = element.total;
        i++;
      });

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.materias,
          datasets: [{
            label: 'Materias Proyección',
            data: this.totales,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }
}

@Component({
  selector: 'app-central2',
  templateUrl: './central2.component.html',
  styleUrls: ['./central2.component.css']
})
export class Central2Component implements OnInit {
  proyecciones: Proyeccion[];
  pageSize: number = 10;

  constructor(private administrador: AdministradorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.administrador.getProyecciones().subscribe(data => {
      this.proyecciones = data;
    });
  }

  openGraph(fecha_inicio, fecha_fin) {
    const modalRef = this.modalService.open(ModalReporte);
    modalRef.componentInstance.fecha_inicio = fecha_inicio;
    modalRef.componentInstance.fecha_fin = fecha_fin;
  }
}
