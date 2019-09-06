import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemoLicenseComponent } from './get-demo-license.component';

describe('GetDemoLicenseComponent', () => {
  let component: GetDemoLicenseComponent;
  let fixture: ComponentFixture<GetDemoLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDemoLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDemoLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
