import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalOverviewSerComponent } from './technical-overview-ser.component';

describe('TechnicalOverviewSerComponent', () => {
  let component: TechnicalOverviewSerComponent;
  let fixture: ComponentFixture<TechnicalOverviewSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalOverviewSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalOverviewSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
