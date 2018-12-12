import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalOverviewSeComponent } from './technical-overview-se.component';

describe('TechnicalOverviewSeComponent', () => {
  let component: TechnicalOverviewSeComponent;
  let fixture: ComponentFixture<TechnicalOverviewSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalOverviewSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalOverviewSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
