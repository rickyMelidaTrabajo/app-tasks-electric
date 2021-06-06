import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HourReportsPerTechnicianComponent } from './hour-reports-per-technician.component';

describe('HourReportsPerTechnicianComponent', () => {
  let component: HourReportsPerTechnicianComponent;
  let fixture: ComponentFixture<HourReportsPerTechnicianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HourReportsPerTechnicianComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HourReportsPerTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
