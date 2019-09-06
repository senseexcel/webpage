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
        id: '9',
        downloadlink: 'https://m.sense2go.net/asset/71:6sales-demo-sense-excel-reportingzip',
        header: 'Helpdesk ',
        subheader: 'Example "7_Helpdesk"',
        text: 'SenseEV examples with: Low, Medium, High: =SenseEV("Count({<[Case Owner Group]={""&$A4&""}, [Priority] = {"""&D$3&""}>} [%CaseId])")',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/7_helpdesk.png'
      },
      {
        id: '8',
        downloadlink: 'https://m.sense2go.net/asset/71:6sales-demo-sense-excel-reportingzip',
        header: 'Summary Income Statement',
        subheader: 'Example "6_Financial Workbook"',
        text: 'This business analysis model is for senior managers to monitor performance within their business.',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/6_financial-workbook.png'
      },
      {
        id: '7',
        downloadlink: 'https://m.sense2go.net/asset/70:5sales-demo-sense-excel-reportingzip',
        header: 'Create different charts, tables, layouts',
        subheader: 'Example "5_Executive Dashboard"',
        text: 'Create a product analyse dashboard, sales total and sales volumes. Create different layouts, charts and designs & inlcude pictures',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/5_executive-dashboard.png'
      },
      {
        id: '6',
        downloadlink: 'https://m.sense2go.net/asset/69:4sales-demo-sense-excel-reportingzip',
        header: 'Create a formated table ',
        subheader: 'Example "4_Distribution"',
        text: 'Create a distribution table with formated values. ="...  "&SenseEV("Upper(Concat(distinct Name," / ""))")',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/4_distribution.png'
      },
      {
        id: '5',
        downloadlink: 'https://m.sense2go.net/asset/41:3sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Pivottable ',
        subheader: 'Example "3_Projectplan"',
        text: 'How to use a pivot table functionality with Sense Excel and create a pixel perfect Sense Excel Report.',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/3_projectplan.png'
      },
      {
        id: '4',
        downloadlink: 'https://m.sense2go.net/asset/40:2sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Task & Sheetloop ',
        subheader: 'Example "2c_Sales"',
        text: 'Extension of the "2a_Sales-Demo" to a SheetLoop. We add a new heading "Country" in that sheetloop. ',
        youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/2_Sales_c.png'
      },
      {
       id: '3',
        downloadlink: 'https://m.sense2go.net/asset/40:2sales-demo-sense-excel-reportingzip',
       header: 'SenseEV & Task & Fileloop ',
       subheader: 'Example "2b_Sales"',
       text: 'Extension of the "2a_Sales-Demo" with FileLoop. The Excel remains unchanged. We make a loop over "Country" this is triggered by a app task.',
       youtubelink: 'https://www.youtube.com/embed/ailiiEBEqm8?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/2_Sales_a.png'
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
    },
    {
        id: '1',
        downloadlink: 'https://m.sense2go.net/asset/39:1sales-demo-sense-excel-reportingzip',
        header: 'SenseEV & Table & Sheetloop spezial',
        subheader: 'Example "1_Sales"',
        text: 'How to use =SenseEV() forumlas and import tables by click. Create an sheetloop and set a qlik drilldown object for filtering.',
        youtubelink: 'https://www.youtube.com/embed/Ix0mitZ7t3I?rel=0',
        showyoutube: false,
        placeholderimage: '../../../assets/images/examples/1_Sales.png'
      }
      
    ];
  }

}
