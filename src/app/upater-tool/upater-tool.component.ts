import { Component, OnInit } from '@angular/core';
import { infos } from '../config/versions.settings';


@Component({
  selector: 'app-upater-tool',
  templateUrl: './upater-tool.component.html',
  styleUrls: ['./upater-tool.component.css']
})
export class UpaterToolComponent implements OnInit {
  sense = infos;
  constructor() { }

  ngOnInit() {
  }

}
