import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriallicenseComponent } from './triallicense.component';

describe('TriallicenseComponent', () => {
  let component: TriallicenseComponent;
  let fixture: ComponentFixture<TriallicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriallicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriallicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
