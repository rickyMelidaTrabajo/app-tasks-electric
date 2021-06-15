import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images.interface';
import * as moment from 'moment';


@Component({
  selector: 'app-form-completed-tasks',
  templateUrl: './form-completed-tasks.component.html',
  styleUrls: ['./form-completed-tasks.component.scss'],
})
export class FormCompletedTasksComponent implements OnInit {

  completedTask: any;

  images: Images = {
    imageAfter: new Array(),
    imageBefore: new Array()
  };

  typesTask: string[] = [
    'Rutinas',
    'Asistencia',
    'Mantenimiento',
    'Correctivo',
    'Salon de Evento',
    'Marketing',
    'Bussiness Center',
    'Gimnasio',
    'TICS'
  ];
  selectedQuantity: any;
  taskSelect = 'Rutinas';

  constructor() {
    this.completedTask = {
      state: 'Finalizado',
      typeTask: '',
      turn: '',
      hourStart: '',
      hourEnd: '',
      hourMan: '',
      description: '',
      photoBefore: null,
      photoAfter: null
    };
  }

  ngOnInit() {
    console.log(`Today is ${moment()}`);
  }

  save() {
    console.log(this.completedTask);
    //console.log(this.images);
  }

  getImageBefore(event) {
    this.images.imageBefore = event.target.files[0];
    console.log(this.images.imageBefore);
  }

  getImageAfter(event) {
    this.images.imageAfter = event.target.files[0];
    console.log(this.images.imageAfter);
  }

  hourMan(startHour, endHour) {
    const hourStart = moment(startHour, 'HH:mm:ss');
    const hourEnd = moment(endHour, 'HH:mm:ss');
    console.log(hourEnd.diff(hourStart) / 3600000);
    // return hourEnd.diff(hourStart) / 3600000;
  }

  example(event) {
    console.log(event.target.value);
  }
}
