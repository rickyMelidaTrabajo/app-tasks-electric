import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  typeTask: string;

  constructor(public nav: NavController) { }

  ngOnInit() {
    this.typeTask = 'completed';
  }

  compareWith(o1: User, o2: User) {
    console.log(o1);
    console.log(o2);
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  closeSession() {
    this.nav.navigateBack('/login');
  }

}
