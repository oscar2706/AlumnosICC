import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TutorNavBarComponent } from './tutor-nav-bar/tutor-nav-bar.component';
import { TutorPanelComponent } from './tutor-panel/tutor-panel.component';
import { TutorVentanaPrincipalComponent } from './tutor-ventana-principal/tutor-ventana-principal.component';
import { AppRoutingModule } from '../app-routing.module';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [VistaPrincipalComponent, TutorNavBarComponent, TutorPanelComponent, TutorVentanaPrincipalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    TutorVentanaPrincipalComponent
  ]
})
export class TutorModule { }
