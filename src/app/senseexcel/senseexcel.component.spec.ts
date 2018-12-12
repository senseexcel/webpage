import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseexcelComponent } from './senseexcel.component';

describe('SenseexcelComponent', () => {
  let component: SenseexcelComponent;
  let fixture: ComponentFixture<SenseexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenseexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
