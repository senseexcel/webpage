import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec11Component } from './sec11.component';

describe('Sec11Component', () => {
  let component: Sec11Component;
  let fixture: ComponentFixture<Sec11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
