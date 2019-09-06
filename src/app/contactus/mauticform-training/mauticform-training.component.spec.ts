import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticformTrainingComponent } from './mauticform-training.component';

describe('MauticformTrainingComponent', () => {
  let component: MauticformTrainingComponent;
  let fixture: ComponentFixture<MauticformTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticformTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticformTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
