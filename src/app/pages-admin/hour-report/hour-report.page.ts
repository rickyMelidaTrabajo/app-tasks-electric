import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-hour-report',
  templateUrl: './hour-report.page.html',
  styleUrls: ['./hour-report.page.scss'],
})
export class HourReportPage implements OnInit {
  typeTask: string;
  filter: Array<string> = [
    'work-type',
    'assistance',
    'mantenimie'
  ];
  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
    this.typeTask = 'rutinas';
    this.loading();
  }

  async loading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando Tareas...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

}
