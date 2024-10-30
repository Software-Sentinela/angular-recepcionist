import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../schedule-register/doctor';


const baseUrl = 'https://sentinela.sosystemsolucoes.com.br/api';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  companyId!: any;
  constructor(public http: HttpClient,
    private router: Router
  ) { }

  listDoctors(token: any, companyId: any): Observable<any> {
    console.log(token);
    console.log(companyId);
    this.companyId = companyId;
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${this.companyId}/doctors`, {headers : reqHeader});
  }

  getDoctors(token: any, companyId: any, doctorId: any): Observable<any> {
    this.companyId = companyId;
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${this.companyId}/doctors/${doctorId}`, {headers : reqHeader});
  }


 // deletePatient(token: any, companyId: any, patientId: any): Observable<any> {
  // this.companyId = companyId;
  //  var reqHeader = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
  //  return this.http.delete(`${baseUrl}/companies/${this.companyId}/patients/${patientId}`, {headers : reqHeader});
  //}

  searchDoctor(token: any, companyId: any, search: any): Observable<any> {
    this.companyId = companyId;
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Doctor>(`${baseUrl}/companies/${this.companyId}/doctors?search=${search}`, {headers : reqHeader});

  }

  //createPatients(token: any, companyId: any, objectPatient: any): Observable<any> {
    // this.companyId = companyId;
   // var reqHeader = new HttpHeaders({
   //   'Content-Type': 'application/json',
   //   'Authorization':"Bearer " + token
   //});
   // return this.http.post<Patient>(`${baseUrl}/companies/${companyId}/patients`, objectPatient, {headers : reqHeader});
  //
  //}

 // updatePatient(token: any, companyId: any, patientId: any, objectPatient: any): Observable<any> {
  // this.companyId = companyId;
  //  var reqHeader = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    'Authorization':"Bearer " + token
  // });
 //   return this.http.patch<Doctor>(`${baseUrl}/companies/${companyId}/patients/${doctorId}`, objectPatient, {headers : reqHeader});
 // }


}
