import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoProyeccionComponent } from './alumno-proyeccion.component';

describe('AlumnoProyeccionComponent', () => {
  let component: AlumnoProyeccionComponent;
  let fixture: ComponentFixture<AlumnoProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
