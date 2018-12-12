import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSePdfComponent } from './download-se-pdf.component';

describe('DownloadSePdfComponent', () => {
  let component: DownloadSePdfComponent;
  let fixture: ComponentFixture<DownloadSePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
