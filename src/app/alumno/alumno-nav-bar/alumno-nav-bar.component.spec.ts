import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNavBarComponent } from './alumno-nav-bar.component';

describe('AlumnoNavBarComponent', () => {
  let component: AlumnoNavBarComponent;
  let fixture: ComponentFixture<AlumnoNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
