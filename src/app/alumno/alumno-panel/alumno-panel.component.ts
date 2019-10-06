import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-panel',
  templateUrl: './alumno-panel.component.html',
  styleUrls: ['./alumno-panel.component.css']
})
export class AlumnoPanelComponent implements OnInit {

  @Input() materiasSeleccionadas: number[];
  @Input() ventanaAbierta:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  prueba() {
    if(this.ventanaAbierta == 3) {
      console.log(this.materiasSeleccionadas);
      this.router.navigate(['alumno/materias']);
    }
  }
}
