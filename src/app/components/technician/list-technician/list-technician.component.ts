import { Component, Input, OnInit } from '@angular/core';
import { Technician } from 'src/app/models/technician.interface';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-list-technician',
  templateUrl: './list-technician.component.html',
  styleUrls: ['./list-technician.component.scss'],
})
export class ListTechnicianComponent implements OnInit {
  technicians: Array<Technician> = new Array();

  constructor(private techService: TechnicianService) { }

  ngOnInit() {
    this.techService.getTechnicians(localStorage.getItem('token'))
      .toPromise()
      .then((res: any) => {
        this.technicians = res.techs;
      })
      .catch(err => {
        console.log(`error`);
      });
  }

}
