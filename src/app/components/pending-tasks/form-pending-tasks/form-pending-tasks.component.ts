import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-pending-tasks',
  templateUrl: './form-pending-tasks.component.html',
  styleUrls: ['./form-pending-tasks.component.scss'],
})
export class FormPendingTasksComponent implements OnInit {
  
  //formPendingTask: FormGroup;
  //dataPendingTask: Array<any> = new Array<any>();

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
  constructor() { }

  ngOnInit() { 

    //this.createFormModel();
  }

/*  createFormModel() {
    this.formPendingTask = this.formBuilder.group({
      taskType: ['mantenimiento'],
      turn: [''],
      description: ['']

    })
  }


  save(){
    console.log(this.formPendingTask.value);
  }*/
}
