import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../services/patients.service';
import { Patient } from './Patient';

@Component({
  selector: 'app-doctor-panel',
  templateUrl: './doctor-panel.component.html',
  styleUrls: ['./doctor-panel.component.css']
})
export class DoctorPanelComponent implements OnInit {

  filterPatient: string = '';

  listPatients: Patient[];

  patient: any;

  pag : number = 1;
  counter : number = 10;

  constructor(private patientService: PatientsService, private route: Router) {
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

  selectPatient(patientId: any): void {
    sessionStorage.setItem("patientId", patientId);
    this.route.navigateByUrl('/doctor-patient-schedule');

  }

  searchPatient(search: any): void {
    this.patientService.searchPatients(sessionStorage.getItem("token"),
    sessionStorage.getItem("companyId"), search)
    .subscribe(
      {
        next: data => {
          this.listPatients = data;
        },
        error: error => {
          console.log(error);
        }
      }
    );
  }


}
