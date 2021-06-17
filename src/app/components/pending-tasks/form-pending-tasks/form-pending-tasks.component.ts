import { Component, OnInit } from '@angular/core';
import { PendingTask } from 'src/app/models/pendingTask.interface';

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

  pendingTask: PendingTask;

  selectedQuantity: any;
  taskSelect = 'Rutinas';
  constructor() {
    this.pendingTask = {
      state: 'Pendiente',
      typeTask: '',
      turn: '',
      description: '',
      dateGeneration: new Date(),
      technician: ['Ricardo Melida', 'Junior']
    };
  }

  ngOnInit() {
  }

  save() {
    console.log(this.pendingTask);
  }

}
