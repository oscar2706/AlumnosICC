import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { Trabajador } from '../../models/trabajador';

@Component({
  selector: 'app-tutor-panel',
  templateUrl: './tutor-panel.component.html',
  styleUrls: ['./tutor-panel.component.css']
})
export class TutorPanelComponent implements OnInit {
  @Input() numeroTrabajador: string;
  tutor: Trabajador;

  constructor(private tutorService: TutorService) { }

  ngOnInit() {
    this.tutorService.getTrabajador(this.numeroTrabajador).subscribe(data => {
      this.tutor = data;
    });
  }

}
