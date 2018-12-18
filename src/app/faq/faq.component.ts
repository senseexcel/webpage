import { Component, OnInit } from '@angular/core';
import { FaqItem } from './api/faq-item.interface';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqdatas: FaqItem[] = [];
  constructor() { }

  ngOnInit() {
    this.faqdatas = [
      {
        header: 'Sense Excel - does not have access to the HUB?',
        text: 'Which license you have: Sense Excel "Token" or Sense Excel "Named"',
        list: [
          {
            text: 'Please check the read access to the content / senseexcel / license.txt.'
          },
          {
            text: 'Please check your licensing.'
          },
          {
            text: 'If you have SE Token license? Notice: the number of Qlik Sense Tokens must be match the number of Sense Excel Tokens.'
          }
        ]
      },
      {
        header: 'Sense Excel - display in your Excel sheet: #Value or #NV in cells',
        text: 'Your conntected to HUB but no data cells will be updating',
        list: [
          {
            text: '1. Find and replace "=SenseEV" with "=SenseEV" after that the cells will be updated'
          },
          {
            text: '2. Save your document'
          },
          {
            text: '3. Open your excel document and reconnect to your HUB & app. Now you should be loaded automatically again.'
          }
        ]
      }
    ];
  }

}
