import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorVentanaPrincipalComponent } from './tutor-ventana-principal.component';

describe('TutorVentanaPrincipalComponent', () => {
  let component: TutorVentanaPrincipalComponent;
  let fixture: ComponentFixture<TutorVentanaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorVentanaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorVentanaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
