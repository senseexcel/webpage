import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauticformGetLicenseComponent } from './mauticform-get-license.component';

describe('MauticformGetLicenseComponent', () => {
  let component: MauticformGetLicenseComponent;
  let fixture: ComponentFixture<MauticformGetLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauticformGetLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauticformGetLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
