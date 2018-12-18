import { Component, OnInit } from '@angular/core';
import { infos } from '../config/versions.settings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sense = infos;
  constructor() { }

  ngOnInit() {
  }

}
