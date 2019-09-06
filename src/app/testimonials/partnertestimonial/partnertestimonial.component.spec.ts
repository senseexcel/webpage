import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnertestimonialComponent } from './partnertestimonial.component';

describe('PartnertestimonialComponent', () => {
  let component: PartnertestimonialComponent;
  let fixture: ComponentFixture<PartnertestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnertestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnertestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
