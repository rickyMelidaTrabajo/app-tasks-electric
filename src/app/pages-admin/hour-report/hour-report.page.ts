import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour-report',
  templateUrl: './hour-report.page.html',
  styleUrls: ['./hour-report.page.scss'],
})
export class HourReportPage implements OnInit {
  typeTask: string;
  filter: Array<string> = [
    'work-type',
    'assistance',
    'mantenimie'
  ]
  constructor() { }

  ngOnInit() {
    this.typeTask = 'rutinas';
  }

}
