import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLeftComponent } from './bar-left.component';

describe('BarLeftComponent', () => {
  let component: BarLeftComponent;
  let fixture: ComponentFixture<BarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
