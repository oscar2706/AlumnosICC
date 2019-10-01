import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoNavBarComponent } from './alumno-nav-bar/alumno-nav-bar.component';

@NgModule({
  declarations: [AlumnoNavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [AlumnoNavBarComponent]
})
export class AlumnoModule { }
