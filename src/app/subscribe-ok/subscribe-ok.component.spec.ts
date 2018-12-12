import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOkComponent } from './subscribe-ok.component';

describe('SubscribeOkComponent', () => {
  let component: SubscribeOkComponent;
  let fixture: ComponentFixture<SubscribeOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
