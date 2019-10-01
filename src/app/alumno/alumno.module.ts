import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoNavBarComponent } from './alumno-nav-bar/alumno-nav-bar.component';
import { AlumnoPanelComponent } from './alumno-panel/alumno-panel.component';

@NgModule({
  declarations: [AlumnoNavBarComponent, AlumnoPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [AlumnoNavBarComponent, AlumnoPanelComponent]
})
export class AlumnoModule { }
