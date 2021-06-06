import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  typeTask: string;
  constructor(public nav: NavController) { }

  ngOnInit() {
    this.typeTask = 'completed';
  }
  closeSession() {
    this.nav.navigateBack('/login');
  }
}
