import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExmapleItemComponent } from './download-exmaple-item.component';

describe('DownloadExmapleItemComponent', () => {
  let component: DownloadExmapleItemComponent;
  let fixture: ComponentFixture<DownloadExmapleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadExmapleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadExmapleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
