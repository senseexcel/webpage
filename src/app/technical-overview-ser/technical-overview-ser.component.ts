import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technical-overview-ser',
  templateUrl: './technical-overview-ser.component.html',
  styleUrls: ['./technical-overview-ser.component.css']
})
export class TechnicalOverviewSerComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Technical Overview: Sense Excel Reporting');
  }

}
