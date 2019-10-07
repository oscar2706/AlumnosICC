import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoOptativasComponent } from './alumno-optativas.component';

describe('AlumnoOptativasComponent', () => {
  let component: AlumnoOptativasComponent;
  let fixture: ComponentFixture<AlumnoOptativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoOptativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoOptativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
