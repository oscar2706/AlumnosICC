import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaIzqComponent } from './columna-izq.component';

describe('ColumnaIzqComponent', () => {
  let component: ColumnaIzqComponent;
  let fixture: ComponentFixture<ColumnaIzqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaIzqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
