import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QonnectionsBannerComponent } from './qonnections-banner.component';

describe('QonnectionsBannerComponent', () => {
  let component: QonnectionsBannerComponent;
  let fixture: ComponentFixture<QonnectionsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QonnectionsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QonnectionsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
