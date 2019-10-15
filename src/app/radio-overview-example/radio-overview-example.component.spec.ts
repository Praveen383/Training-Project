import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOverviewExampleComponent } from './radio-overview-example.component';

describe('RadioOverviewExampleComponent', () => {
  let component: RadioOverviewExampleComponent;
  let fixture: ComponentFixture<RadioOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
