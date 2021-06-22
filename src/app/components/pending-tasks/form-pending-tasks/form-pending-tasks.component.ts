import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.interface';
import { TasksServicesService } from 'src/app/services/tasks-services.service';

@Component({
  selector: 'app-form-pending-tasks',
  templateUrl: './form-pending-tasks.component.html',
  styleUrls: ['./form-pending-tasks.component.scss'],
})
export class FormPendingTasksComponent implements OnInit {

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

  pendingTask: Task;

  selectedQuantity: any;
  taskSelect = 'Rutinas';
  constructor(private taskPendingService: TasksServicesService) {
    this.pendingTask = {
      state: 'Pendiente',
      type: '',
      turn: '',
      description: ''
    };
  }

  ngOnInit() {
  }

  save() {
    this.taskPendingService.addPendingTask(this.pendingTask, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
      },
        (err: any) => {
          console.log(err);
        });
    console.log(this.pendingTask);
  }

}
