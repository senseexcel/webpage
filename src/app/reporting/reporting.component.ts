import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { infos } from '../config/versions.settings';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  sense = infos;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Sense Excel Reporting ' + this.sense.excel.reporting.version);
  }

}
