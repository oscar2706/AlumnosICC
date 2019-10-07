import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoVentanaProyeccionComponent } from './alumno-ventana-proyeccion.component';

describe('AlumnoVentanaProyeccionComponent', () => {
  let component: AlumnoVentanaProyeccionComponent;
  let fixture: ComponentFixture<AlumnoVentanaProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoVentanaProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoVentanaProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
