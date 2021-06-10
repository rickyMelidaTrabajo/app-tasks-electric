import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-completed-tasks',
  templateUrl: './form-completed-tasks.component.html',
  styleUrls: ['./form-completed-tasks.component.scss'],
})
export class FormCompletedTasksComponent implements OnInit {

  completedTask: any;

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
    }
  }

  ngOnInit() {
  }

  save() {
    console.log(this.completedTask);
  }

  fileEvent(image: Event) {
    console.log((<HTMLInputElement>image.target).files[0]);
  }

}
