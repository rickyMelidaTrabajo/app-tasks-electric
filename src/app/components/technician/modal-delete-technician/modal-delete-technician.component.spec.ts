import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDeleteTechnicianComponent } from './modal-delete-technician.component';

describe('ModalDeleteTechnicianComponent', () => {
  let component: ModalDeleteTechnicianComponent;
  let fixture: ComponentFixture<ModalDeleteTechnicianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteTechnicianComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeleteTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
