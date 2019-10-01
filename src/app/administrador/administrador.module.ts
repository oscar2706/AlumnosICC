import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { ColumnaIzqComponent } from './columna-izq/columna-izq.component';
import { CentralComponent } from './central/central.component';

@NgModule({
  declarations: [BarraComponent, ColumnaIzqComponent, CentralComponent],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
