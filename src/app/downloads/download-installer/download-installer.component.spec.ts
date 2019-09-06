import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadInstallerComponent } from './download-installer.component';

describe('DownloadInstallerComponent', () => {
  let component: DownloadInstallerComponent;
  let fixture: ComponentFixture<DownloadInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
