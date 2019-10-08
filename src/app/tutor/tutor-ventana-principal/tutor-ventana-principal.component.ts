import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';


@Component({
  selector: 'app-tutor-ventana-principal',
  templateUrl: './tutor-ventana-principal.component.html',
  styleUrls: ['./tutor-ventana-principal.component.css']
})
export class TutorVentanaPrincipalComponent implements OnInit {
  numeroTrabajador: string;

  constructor(private tutorService: TutorService) { }

  ngOnInit() {
    this.numeroTrabajador = this.tutorService.getAcceso();
  }

}
