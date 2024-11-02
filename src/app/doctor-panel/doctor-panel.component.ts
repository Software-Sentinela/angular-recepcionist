import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorServices } from '../services/doctors.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.css']
})
export class DoctorPanelComponent implements OnInit {

  filterPatient: string = '';

  list: any[] = [];
  // listDoctors: Doctor[] = [];
  patient: any;

  pag : number = 1;
  counter : number = 10;
  companyId: number = 0;
  role!: string | null;
  constructor(private patientService: PatientsService, private router: Router, private doctorSvc: DoctorServices, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log({params});

      const stringParam = params.get('companyId');
      this.companyId = Number(stringParam);


      console.log('==== companyId', this.companyId);

    });
    this.role = sessionStorage.getItem('role');
    if(this.role == 'company_patient' || this.role == 'patient') {
      this.listAllDoctors();
    } else if (this.role == 'company_receptionist') {
      this.listPatient();
    }
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value
  }

  listAllDoctors(): void {
    console.log('listAllDoctors');
    const token = sessionStorage.getItem('token');
    this.doctorSvc.listDoctors(token, this.companyId).subscribe((res) => {
      console.log(res, "RES");
      this.list = res;

    });
  }
  listPatient(): void {
    console.log('listPatient');

    this.patientService.listPatients(sessionStorage.getItem("token"),sessionStorage.getItem("companyId"))
    .subscribe(
      data => {
        this.list = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  selectDoctor(doctorId: any): void {
    console.log(doctorId);
    this.router.navigateByUrl(`/about-doctor/${this.companyId}/${doctorId}`);
  }

  selectPatient(patientId: any): void {
    sessionStorage.setItem("patientId", patientId);
    this.router.navigateByUrl('/doctor-patient-schedule');

  }

  searchPatient(search: any): void {
    this.patientService.searchPatients(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      {
        next: data => {
          this.list = data;
        },
        error: error => {
          console.log(error);
        }
      }
    );
  }


}
