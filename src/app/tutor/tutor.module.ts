import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

@NgModule({
  declarations: [VistaPrincipalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VistaPrincipalComponent
  ]
})
export class TutorModule { }
