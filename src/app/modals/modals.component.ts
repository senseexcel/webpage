import { Component, OnInit } from '@angular/core';
import { infos } from '../config/versions.settings';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  sense = infos;
  constructor() { }

  ngOnInit() {
  }

}
