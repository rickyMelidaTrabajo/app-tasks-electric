import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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

  constructor(private taskServices: TasksServicesService) {
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
    let data = new FormData();

    for(let i=0;i<this.image_after.length;i++) {
      data.append('data', JSON.stringify(this.completedTask));
      data.append('imageAfter', this.image_after[i], this.image_after[i].name);
      data.append('imageBefore', this.image_before[i], this.image_before[i].name);
    }


    this.taskServices.addPendingTask(data).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(`Error al guardar datos! ${err}`)
      }
    )
  }

  getImageBefore(event) {
    this.image_before = event.target.files;
  }

  getImageAfter(event) {
    this.image_after = event.target.files;
  }

  hoursMan() {
    if(this.completedTask.hourStart && this.completedTask.hourEnd) {
      const hourStart = moment(this.completedTask.hourStart, 'HH:mm:ss');
      const hourEnd = moment(this.completedTask.hourEnd, 'HH:mm:ss');
      
      return this.completedTask.hourMan = moment.utc(hourEnd.diff(hourStart)).format('HH:mm'); 
    }
    return this.completedTask.hourMan = '00:00';    
  }

}
