import { Component, OnInit, Input } from '@angular/core';
import { DownloadItem } from '../api/download-item.interface';

@Component({
  selector: 'app-download-exmaple-item',
  templateUrl: './download-exmaple-item.component.html',
  styleUrls: ['./download-exmaple-item.component.css']
})
export class DownloadExmapleItemComponent implements OnInit {

  constructor() { }
  @Input() downloaditem: DownloadItem;
  @Input() myIndex: number;
  ngOnInit() {
  }

}
