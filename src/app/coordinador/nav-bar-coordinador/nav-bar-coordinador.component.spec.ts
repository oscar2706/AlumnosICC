import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCoordinadorComponent } from './nav-bar-coordinador.component';

describe('NavBarCoordinadorComponent', () => {
  let component: NavBarCoordinadorComponent;
  let fixture: ComponentFixture<NavBarCoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarCoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
