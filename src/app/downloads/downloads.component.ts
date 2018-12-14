import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { infos } from '../config/versions.settings';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  sense = infos;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Download: Sense Excel + Reporting and more');
  }

}
