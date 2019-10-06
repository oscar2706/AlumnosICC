import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent} from './busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarCoordinadorComponent } from './nav-bar-coordinador/nav-bar-coordinador.component';
import { LateralComponent } from './lateral/lateral.component';
import { PrincipalComponent } from './principal/principal.component';
import { VisualizarComponent,NgbdModalContent } from './visualizar/visualizar.component';


@NgModule({
  declarations: [BusquedaComponent, NavBarCoordinadorComponent, LateralComponent, PrincipalComponent,NgbdModalContent, VisualizarComponent],
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule,NgbModule
  ], 
  exports:[BusquedaComponent,NavBarCoordinadorComponent,LateralComponent,PrincipalComponent,NgbdModalContent],
  entryComponents: [NgbdModalContent]
})
export class CoordinadorModule { }
