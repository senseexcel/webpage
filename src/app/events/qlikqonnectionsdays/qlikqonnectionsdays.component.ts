import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qlikqonnectionsdays',
  templateUrl: './qlikqonnectionsdays.component.html',
  styleUrls: ['./qlikqonnectionsdays.component.css']
})
export class QlikqonnectionsdaysComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Visit us on Qlik Global Conference 2019');
  }

}
