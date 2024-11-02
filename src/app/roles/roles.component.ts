import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: any = {};


  constructor(private authService: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    const loginUser = {
      email:  sessionStorage.getItem("email"),
      password: sessionStorage.getItem("pass"),
      device_name: "Web"
    };
    this.authService.login(loginUser)
      .subscribe(
        response => {
          this.roles = response.user.roles;
          console.log(this.roles);

        },
        error => {
          console.log(error);
          alert('Acesso Negado!')
        }
      );
  }

  goCompany(role : any) : void {
    sessionStorage.setItem("role", role);

    if(role == 'doctor' || role == 'company_doctor') {
      this.router.navigateByUrl('/doctor-company-list');
    } else if(role == 'receptionist' || role == 'company_receptionist')
    {
      this.router.navigateByUrl('/receptionist-company-list');
    }
    else if(role == 'admin' || role == 'company_owner') {
      this.router.navigateByUrl('/admin-company-list');
    } else if(role == 'company_patient' || role == 'patient') {
      this.router.navigateByUrl('/company-list');
    }
  }
}
