import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorServices } from './doctors.service';

const baseUrl = 'https://sentinela.sosystemsolucoes.com.br/api';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  constructor(public doctorSvc: DoctorServices) { }



  getSchedulings(): Observable<any> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.doctorSvc.http.get<any>(`${baseUrl}/companies/${this.doctorSvc.companyId}/schedulings`, { headers });
  }

  createScheduling(schedulingData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.doctorSvc.http.post<any>(`${baseUrl}/companies/${this.doctorSvc.companyId}/schedulings`, schedulingData, { headers });
  }
}
