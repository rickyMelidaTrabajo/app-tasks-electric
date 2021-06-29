import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.interface';
import { Message } from 'src/app/models/message.interface';
import { TasksServicesService } from 'src/app/services/tasks-services.service';
import { ToastController } from '@ionic/angular';

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
  message: Message;

  constructor(private taskPendingService: TasksServicesService, public toastController: ToastController) {
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
        this.message.text = res.message;
        this.message.type = 'success';
        this.messageToast(this.message);
        this.reset();
      },
        (err: any) => {
          this.message.text = err.message;
          this.message.type = 'danger';
        });
  }

  reset() {
    this.pendingTask.type = 'Rutinas';
    this.pendingTask.turn = 'manana';
    this.pendingTask.description = '';
  }

  async messageToast(message: Message) {
    const toast = await this.toastController.create({
      message: message.text,
      duration: 2000,
      color: message.type
    });
    toast.present();
  }

}
