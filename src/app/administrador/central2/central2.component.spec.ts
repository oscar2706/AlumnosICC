import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Central2Component } from './central2.component';

describe('Central2Component', () => {
  let component: Central2Component;
  let fixture: ComponentFixture<Central2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Central2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Central2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
