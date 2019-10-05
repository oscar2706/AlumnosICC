import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VistaPrincipalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    VistaPrincipalComponent
  ]
})
export class TutorModule { }
