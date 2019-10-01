import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPanelComponent } from './alumno-panel.component';

describe('AlumnoPanelComponent', () => {
  let component: AlumnoPanelComponent;
  let fixture: ComponentFixture<AlumnoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
