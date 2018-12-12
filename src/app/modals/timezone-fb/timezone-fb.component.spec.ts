import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneFBComponent } from './timezone-fb.component';

describe('TimezoneFBComponent', () => {
  let component: TimezoneFBComponent;
  let fixture: ComponentFixture<TimezoneFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
