import { Component, OnInit } from '@angular/core';
import { infos } from '../../config/versions.settings';


@Component({
  selector: 'app-mauticformtriallicvisitors',
  templateUrl: './mauticformtriallicvisitors.component.html',
  styleUrls: ['./mauticformtriallicvisitors.component.css']
})
export class MauticformtriallicvisitorsComponent implements OnInit {
  sense = infos;
  clients = 133;
  questions = 1493;
  coffee = 365;
  projects = 47;
  constructor() { }
  ngOnInit() {
    if (localStorage.getItem('se-coffee') === null) {
      localStorage.setItem('se-coffee', this.coffee.toString());
      localStorage.setItem('se-clients', this.coffee.toString());
      localStorage.setItem('se-questions', this.coffee.toString());
      localStorage.setItem('se-projects', this.coffee.toString());
      this.update();
    } else {
      this.coffee = Number(localStorage.getItem('se-coffee'));
      this.questions = Number(localStorage.getItem('se-questions'));
      this.update();
      }
  }

  update(): void {
    // Fun facts
    setInterval(() => {
      this.coffee = this.coffee + 1;
      localStorage.setItem('se-coffee', this.coffee.toString());
    }, 9600);

    setInterval(() => {
      this.questions = this.questions + 1;
      localStorage.setItem('se-questions', this.questions.toString());
    }, 3600);
  }
}
