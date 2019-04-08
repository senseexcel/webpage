import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticformtriallicvisitorsComponent } from './mauticformtriallicvisitors.component';

describe('MauticformtriallicvisitorsComponent', () => {
  let component: MauticformtriallicvisitorsComponent;
  let fixture: ComponentFixture<MauticformtriallicvisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticformtriallicvisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticformtriallicvisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
