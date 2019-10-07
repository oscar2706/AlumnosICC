import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoVentanaOptativasComponent } from './alumno-ventana-optativas.component';

describe('AlumnoVentanaOptativasComponent', () => {
  let component: AlumnoVentanaOptativasComponent;
  let fixture: ComponentFixture<AlumnoVentanaOptativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoVentanaOptativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoVentanaOptativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
