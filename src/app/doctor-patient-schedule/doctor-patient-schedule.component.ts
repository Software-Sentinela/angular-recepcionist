import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';
=======
import { Patient } from '../receptionist-panel/patient';
import { ServiceAuthService } from '../services/patients.service';
import { Router } from '@angular/router';
>>>>>>> c04ed75d4c00c3c66922cf33847f7396d6c82f23

@Component({
  selector: 'app-doctor-patient-schedule',
  templateUrl: './doctor-patient-schedule.component.html',
  styleUrls: ['./doctor-patient-schedule.component.css']
})
export class DoctorPatientScheduleComponent implements OnInit {

  patient = {} as Patient;

  constructor(private patientService: ServiceAuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.showPatient();
  }

  showPatient(): void {
    this.patientService.getPatients(
<<<<<<< HEAD
    sessionStorage.getItem("token"),
=======
    sessionStorage.getItem("token"), 
>>>>>>> c04ed75d4c00c3c66922cf33847f7396d6c82f23
    sessionStorage.getItem("companyId"),
    sessionStorage.getItem("patientId"))
    .subscribe(
      data => {
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
<<<<<<< HEAD
}
=======
} 
>>>>>>> c04ed75d4c00c3c66922cf33847f7396d6c82f23

}
