import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFullpackageComponent } from './download-fullpackage.component';

describe('DownloadFullpackageComponent', () => {
  let component: DownloadFullpackageComponent;
  let fixture: ComponentFixture<DownloadFullpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadFullpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFullpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
