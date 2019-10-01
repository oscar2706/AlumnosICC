import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { ColumnaIzqComponent } from './columna-izq/columna-izq.component';

@NgModule({
  declarations: [BarraComponent, ColumnaIzqComponent],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
