import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneBFComponent } from './timezone-bf.component';

describe('TimezoneBFComponent', () => {
  let component: TimezoneBFComponent;
  let fixture: ComponentFixture<TimezoneBFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneBFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneBFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
