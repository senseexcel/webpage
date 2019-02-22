import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QonnectionMdComponent } from './qonnection-md.component';

describe('QonnectionMdComponent', () => {
  let component: QonnectionMdComponent;
  let fixture: ComponentFixture<QonnectionMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QonnectionMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QonnectionMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
