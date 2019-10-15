import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMartComponent } from './e-mart.component';

describe('EMartComponent', () => {
  let component: EMartComponent;
  let fixture: ComponentFixture<EMartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
