import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BarLeftComponent } from './bar-left/bar-left.component';
import { CentralComponent } from './central/central.component';
import { Central2Component } from './central2/central2.component';
import { ResetPasswdComponent } from './reset-passwd/reset-passwd.component';
import { ProyeccionesComponent } from './proyecciones/proyecciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarleftAdmComponent } from './barleft-adm/barleft-adm.component';

@NgModule({
  declarations: [NavbarComponent, BarLeftComponent, CentralComponent,Central2Component,ResetPasswdComponent,ProyeccionesComponent, BarleftAdmComponent],
  imports: [
    CommonModule, NgbModule,FormsModule, ReactiveFormsModule
  ],
  exports:[NavbarComponent,BarLeftComponent,CentralComponent,Central2Component,ResetPasswdComponent,ProyeccionesComponent]
})
export class AdministradorModule { }
