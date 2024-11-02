import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../receptionist-panel/Patient';


const baseUrl = 'https://sentinela.sosystemsolucoes.com.br/api';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  listPatients(token: any, companyId: any): Observable<any> {
    console.log(token);
    console.log(companyId);

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients`, {headers : reqHeader});
  }

  getPatients(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }


  deletePatient(token: any, companyId: any, patientId: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.delete(`${baseUrl}/companies/${companyId}/patients/${patientId}`, {headers : reqHeader});
  }

  searchPatients(token: any, companyId: any, search: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.get<Patient>(`${baseUrl}/companies/${companyId}/patients?search=${search}`, {headers : reqHeader});

  }

  createPatients(token: any, companyId: any, objectPatient: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.post<Patient>(`${baseUrl}/companies/${companyId}/patients`, objectPatient, {headers : reqHeader});

  }

  updatePatient(token: any, companyId: any, patientId: any, objectPatient: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':"Bearer " + token
   });
    return this.http.patch<Patient>(`${baseUrl}/companies/${companyId}/patients/${patientId}`, objectPatient, {headers : reqHeader});
  }


}
