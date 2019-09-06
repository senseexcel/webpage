import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDownloadlinkComponent } from './get-downloadlink.component';

describe('GetDownloadlinkComponent', () => {
  let component: GetDownloadlinkComponent;
  let fixture: ComponentFixture<GetDownloadlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDownloadlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDownloadlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
