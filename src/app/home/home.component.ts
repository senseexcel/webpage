import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { infos } from '../config/versions.settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sense = infos;
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.sense.excel.name + ' ' + this.sense.excel.version );
  }

}
