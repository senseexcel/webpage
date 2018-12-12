import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})

export class PagetitleComponent implements OnInit {
  @Input() path: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageurl: string;

  public myStyles: any;

  constructor() { }

  ngOnInit() {
    this.myStyles = {
      'background-image': `url(${this.imageurl})`,
    };
  }

}
