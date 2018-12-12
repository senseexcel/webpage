import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec9Component } from './sec9.component';

describe('Sec9Component', () => {
  let component: Sec9Component;
  let fixture: ComponentFixture<Sec9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
