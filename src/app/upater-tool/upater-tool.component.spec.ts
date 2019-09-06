import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpaterToolComponent } from './upater-tool.component';

describe('UpaterToolComponent', () => {
  let component: UpaterToolComponent;
  let fixture: ComponentFixture<UpaterToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpaterToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpaterToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
