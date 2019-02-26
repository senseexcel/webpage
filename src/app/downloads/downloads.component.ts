import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { infos } from '../config/versions.settings';
import { DownloadItem } from './api/download-item.interface';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  sense = infos;
  downloaditems: DownloadItem[] = [];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('All Downloads and Examples for: Sense Excel + Reporting');
    this.downloaditems = [
      {
        id: '1',
        downloadlink: 'https://m.sense2go.net/asset/39:1sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Table & Sheetloop spezial',
        subheader: 'Example "1_Sales"',
        text: 'How to use =SenseEV() forumlas and import tables by click. Create an sheetloop and set a qlik drilldown object for filtering.',
        youtubelink: 'https://www.youtube.com/embed/Ix0mitZ7t3I?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/1_Sales.png'
      },
       {
        id: '2',
         downloadlink: 'https://m.sense2go.net/asset/40:2sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Excel objects',
        subheader: 'Example "2a_Sales"',
        text: 'How to use =SenseEV() forumlas and also Microsoft Excel "chart objects". Understanding how it works! ',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
         showyoutube: false,
         placeholderimage: '../../../assets/images/examples/2_Sales_a.png'
      }
      ,
       {
        id: '3',
         downloadlink: 'https://m.sense2go.net/asset/40:2sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Task & Fileloop ',
        subheader: 'Example "2b_Sales"',
        text: 'Extension of the "2a_Sales-Demo" with FileLoop. The Excel remains unchanged. We make a loop over "Country" this is triggered by a app task.',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
         showyoutube: false,
         placeholderimage: '../../../assets/images/examples/2_Sales_a.png'
      }
      ,
      {
        id: '4',
        downloadlink: 'https://m.sense2go.net/asset/40:2sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Task & Sheetloop ',
        subheader: 'Example "2c_Sales"',
        text: 'Extension of the "2a_Sales-Demo" to a SheetLoop. We add a new heading "Country" in that sheetloop. ',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/2_Sales_c.png'
      }
      ,
      {
        id: '5',
        downloadlink: 'https://m.sense2go.net/asset/41:3sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Pivottable ',
        subheader: 'Example "3_Projectplan"',
        text: 'How to use a pivot table functionality with Sense Excel and create a pixel perfect Sense Excel Report.',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/3_projectplan.png'
      }
    ];
  }

}
