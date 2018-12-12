import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec12Component } from './sec12.component';

describe('Sec12Component', () => {
  let component: Sec12Component;
  let fixture: ComponentFixture<Sec12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
