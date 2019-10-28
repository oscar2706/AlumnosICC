import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { NavbarComponent } from "./navbar/navbar.component";
import { BarLeftComponent } from "./bar-left/bar-left.component";
import { CentralComponent, NgbdModalContent } from "./central/central.component";
import { Central2Component, NgbdModalContent2 } from "./central2/central2.component";
import { ResetPasswdComponent } from "./reset-passwd/reset-passwd.component";
import { ProyeccionesComponent } from "./proyecciones/proyecciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BarleftAdmComponent } from "./barleft-adm/barleft-adm.component";
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    BarLeftComponent,
    CentralComponent,
    Central2Component,
    ResetPasswdComponent,
    ProyeccionesComponent,
    BarleftAdmComponent,
    NgbdModalContent, 
    NgbdModalContent2
  ],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule, NgxPaginationModule, AppRoutingModule],
  exports: [ResetPasswdComponent, ProyeccionesComponent],
  entryComponents: [NgbdModalContent, NgbdModalContent2]
})
export class AdministradorModule {}
