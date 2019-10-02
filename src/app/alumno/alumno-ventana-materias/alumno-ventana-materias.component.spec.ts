import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoVentanaMateriasComponent } from './alumno-ventana-materias.component';

describe('AlumnoVentanaMateriasComponent', () => {
  let component: AlumnoVentanaMateriasComponent;
  let fixture: ComponentFixture<AlumnoVentanaMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoVentanaMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoVentanaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
