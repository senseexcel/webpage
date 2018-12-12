import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mauticform2Component } from './mauticform2.component';

describe('Mauticform2Component', () => {
  let component: Mauticform2Component;
  let fixture: ComponentFixture<Mauticform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mauticform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mauticform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
