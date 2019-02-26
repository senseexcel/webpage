import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlikqonnectionsdaysComponent } from './qlikqonnectionsdays.component';

describe('QlikqonnectionsdaysComponent', () => {
  let component: QlikqonnectionsdaysComponent;
  let fixture: ComponentFixture<QlikqonnectionsdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlikqonnectionsdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlikqonnectionsdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
