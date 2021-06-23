/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ImageStorageService } from 'src/app/services/image-storage.service';
import { TasksServicesService } from 'src/app/services/tasks-services.service';


@Component({
  selector: 'app-form-completed-tasks',
  templateUrl: './form-completed-tasks.component.html',
  styleUrls: ['./form-completed-tasks.component.scss'],
})
export class FormCompletedTasksComponent implements OnInit {

  completedTask: any;

  image_before: Array<File> = null;
  image_after: Array<File> = null;
  urlImageBefore: Observable<string>;
  urlImageAfter: Observable<string>;

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

  constructor(private taskServices: TasksServicesService, private storageService: ImageStorageService) {
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
  }

  save() {
    const data = new FormData();

    for (let i = 0; i < this.image_after.length; i++) {
      data.append('image_after', this.image_after[i], this.image_after[i].name);
      data.append('image_before', this.image_before[i], this.image_before[i].name);
      data.append('data', JSON.stringify(this.completedTask));
    }

    this.taskServices.addFinishedTask(data, localStorage.getItem('token')).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

  }

  getImageBefore(event) {
    this.image_before = event.target.files;
    console.log(this.completedTask);
  }

  getImageAfter(event) {
    this.image_after = event.target.files;
    console.log(this.completedTask);
  }

  hoursMan() {
    if (this.completedTask.hourStart && this.completedTask.hourEnd) {
      const hourStart = moment(this.completedTask.hourStart, 'HH:mm:ss');
      const hourEnd = moment(this.completedTask.hourEnd, 'HH:mm:ss');

      return this.completedTask.hourMan = moment.utc(hourEnd.diff(hourStart)).format('HH:mm');
    }
    return this.completedTask.hourMan = '00:00';
  }

  uploadImageStorage(pathfile: string) {

    this.storageService.uploadImageBefore(this.image_before[0], pathfile).snapshotChanges()
      .subscribe(
        res => {
          console.log(`Subio la imagen`);
        },
        err => {
          console.log(`Error al subir`);
        }
      );
  }
}
