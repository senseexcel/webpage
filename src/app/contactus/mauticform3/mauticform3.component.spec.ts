import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mauticform3Component } from './mauticform3.component';

describe('Mauticform3Component', () => {
  let component: Mauticform3Component;
  let fixture: ComponentFixture<Mauticform3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mauticform3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mauticform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
