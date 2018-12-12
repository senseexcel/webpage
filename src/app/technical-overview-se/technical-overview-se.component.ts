import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technical-overview-se',
  templateUrl: './technical-overview-se.component.html',
  styleUrls: ['./technical-overview-se.component.css']
})
export class TechnicalOverviewSeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Technical Overview: Sense Excel');
  }

}
