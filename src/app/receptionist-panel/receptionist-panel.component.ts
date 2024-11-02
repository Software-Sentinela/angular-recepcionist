import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../schedule-register/doctor';
import { ServiceAuthService } from '../services/patients.service';
import { Patient } from './Patient';
import { DoctorServices } from '../services/doctors.service';


@Component({
  selector: 'app-receptionist-panel',
  templateUrl: './receptionist-panel.component.html',
  styleUrls: ['./receptionist-panel.component.css']
})



export class ReceptionistPanelComponent implements OnInit {

  filterPatient: string = '';

  listPatients: Patient[];
  listDoctors!: Doctor[];

  patient: any;

  pag : number = 1;
  counter : number = 10;

  constructor( private patientService: ServiceAuthService, private route: Router, private doctorsSvc: DoctorServices) {
      this.listPatients = [];

  }

  ngOnInit(): void {
    this.listPatient();
    console.log(this.listPatient());
  }

  search(event:Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value

  }

  listPatient(): void {
    this.patientService.listPatients(sessionStorage.getItem("token"),sessionStorage.getItem("companyId"))
    .subscribe(
      data => {
        this.listPatients = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  listAllsDoctors(): void {
    this.doctorsSvc.
  }

  selectPatient(patientId: any): void {
    sessionStorage.setItem("patientId", patientId);
    this.route.navigateByUrl('/patient-schedule');

  }

  searchPatient(search: any): void {
    this.patientService.searchPatients(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      data => {
        this.listPatients = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
