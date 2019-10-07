import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { NavbarComponent } from "./navbar/navbar.component";
import { BarLeftComponent } from "./bar-left/bar-left.component";
import { CentralComponent, NgbdModalContent } from "./central/central.component";
import { Central2Component } from "./central2/central2.component";
import { ResetPasswdComponent } from "./reset-passwd/reset-passwd.component";
import { ProyeccionesComponent } from "./proyecciones/proyecciones.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BarleftAdmComponent } from "./barleft-adm/barleft-adm.component";

@NgModule({
  declarations: [
    NavbarComponent,
    BarLeftComponent,
    CentralComponent,
    Central2Component,
    ResetPasswdComponent,
    ProyeccionesComponent,
    BarleftAdmComponent,
    NgbdModalContent
  ],
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
  exports: [ResetPasswdComponent, ProyeccionesComponent],
  entryComponents: [NgbdModalContent]
})
export class AdministradorModule {}
