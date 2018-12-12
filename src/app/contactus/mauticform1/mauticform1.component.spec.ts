import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mauticform1Component } from './mauticform1.component';

describe('Mauticform1Component', () => {
  let component: Mauticform1Component;
  let fixture: ComponentFixture<Mauticform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mauticform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mauticform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
