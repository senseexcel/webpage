import { Component, OnInit, Input } from '@angular/core';
import { FaqItem } from '../api/faq-item.interface';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() faqItem: FaqItem;
  @Input() myIndex: number;
  constructor() { }

  ngOnInit() {
  }

}
