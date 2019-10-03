import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarleftAdmComponent } from './barleft-adm.component';

describe('BarleftAdmComponent', () => {
  let component: BarleftAdmComponent;
  let fixture: ComponentFixture<BarleftAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarleftAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarleftAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
