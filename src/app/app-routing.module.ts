import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDoctorDayComponent } from './about-doctor-day/about-doctor-day.component';
import { AboutDoctorComponent } from './about-doctor/about-doctor.component';
import { AboutPatientComponent } from './about-patient/about-patient.component';
import { AdminCompanyListComponent } from './admin-company-list/admin-company-list.component';
import { AdminCreateEmployeeComponent } from './admin-create-employee/admin-create-employee.component';
import { AdminCreatePatientComponent } from './admin-create-patient/admin-create-patient.component';
import { AdminEmployeeManagementComponent } from './admin-employee-management/admin-employee-management.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPatientManagementComponent } from './admin-patient-management/admin-patient-management.component';
import { AdminPatientScheduleComponent } from './admin-patient-schedule/admin-patient-schedule.component';
import { AdminScheduleComponent } from './admin-schedule/admin-schedule.component';
import { AdminSupervisionComponent } from './admin-supervision/admin-supervision.component';
import { AdminUpdatePatientComponent } from './admin-update-patient/admin-update-patient.component';
import { ChatAlertComponent } from './chat-alert/chat-alert.component';
import { ChatComponent } from './chat/chat.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ConsultationsInProgressComponent } from './consultations-in-progress/consultations-in-progress.component';
import { DoctorAboutDoctorDayComponent } from './doctor-about-doctor-day/doctor-about-doctor-day.component';
import { DoctorAboutDoctorComponent } from './doctor-about-doctor/doctor-about-doctor.component';
import { DoctorAboutPatientComponent } from './doctor-about-patient/doctor-about-patient.component';
import { DoctorChatAlertComponent } from './doctor-chat-alert/doctor-chat-alert.component';
import { DoctorCompanyListComponent } from './doctor-company-list/doctor-company-list.component';
import { DoctorConsultationsInProgressComponent } from './doctor-consultations-in-progress/doctor-consultations-in-progress.component';
import { DoctorPanelComponent } from './doctor-panel/doctor-panel.component';
import { DoctorPatientScheduleComponent } from './doctor-patient-schedule/doctor-patient-schedule.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { EmergencyRoomComponent } from './emergency-room/emergency-room.component';
import { FooterDoctorComponent } from './footer-doctor/footer-doctor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMedicoComponent } from './header-doctor/header-doctor.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HomeComponent } from './home/home.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientScheduleRegisterComponent } from './patient-schedule-register/patient-schedule-register.component';
import { PatientScheduleComponent } from './patient-schedule/patient-schedule.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { RecepcionistHeaderComponent } from './recepcionist-header/recepcionist-header.component';
import { ReceptionistCompanyListComponent } from './receptionist-company-list/receptionist-company-list.component';
import { ReceptionistPanelComponent } from './receptionist-panel/receptionist-panel.component';
import { RolesComponent } from './roles/roles.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  // Página inicial
{ path: 'home', component: HomeComponent }, // Página inicial

// Painel da recepcionista
{ path: 'receptionist-panel', component: ReceptionistPanelComponent, canActivate:[AuthGuardService] }, // Painel da recepcionista

// Cadastro de pacientes
{ path: 'patient-register', component: PatientRegisterComponent, canActivate:[AuthGuardService] }, // Cadastro de paciente

// Cadastro de agendamentos
{ path: 'schedule-register', component: ScheduleRegisterComponent, canActivate:[AuthGuardService] }, // Cadastro de agendamento

// Alerta de chat
{ path: 'chat-alert', component: ChatAlertComponent, canActivate:[AuthGuardService] }, // Alerta de chat

// Sobre o paciente
{ path: 'about-patient', component: AboutPatientComponent, canActivate:[AuthGuardService] }, // Sobre o paciente

// Agenda do médico
{ path: 'doctor-schedule', component: DoctorScheduleComponent, canActivate:[AuthGuardService] }, // Agenda do médico

// Agenda do paciente
{ path: 'patient-schedule', component: PatientScheduleComponent, canActivate:[AuthGuardService] }, // Agenda do paciente

// Chat
{ path: 'chat', component: ChatComponent, canActivate:[AuthGuardService] }, // Chat

// Registro de agenda do paciente
{ path: 'patient-schedule-register', component: PatientScheduleRegisterComponent, canActivate:[AuthGuardService] }, // Cadastro de agenda do paciente

// Menu de cabeçalho
{ path: 'header-menu', component: HeaderMenuComponent, canActivate:[AuthGuardService] }, // Menu de cabeçalho

// Rodapé
{ path: 'footer', component: FooterComponent, canActivate:[AuthGuardService] }, // Rodapé

// Sobre o médico
{ path: 'about-doctor', component: AboutDoctorComponent, canActivate:[AuthGuardService] }, // Sobre o médico
{ path: 'about-doctor/:companyId/:doctorId:', component: AboutDoctorComponent, canActivate:[AuthGuardService] }, // Sobre o médico

// Detalhes sobre o dia do médico
{ path: 'about-doctor-day/:companyId/:doctorId', component: AboutDoctorDayComponent, canActivate: [AuthGuardService] }, // Sobre o dia do médico
{ path: 'about-doctor-day', component: AboutDoctorDayComponent, canActivate:[AuthGuardService] }, // Sobre o dia do médico

// Lista de empresas
{ path: 'company-list', component: CompanyListComponent, canActivate:[AuthGuardService] }, // Lista de empresas

// Cabeçalho da recepcionista
{ path: 'recepcionist-header', component: RecepcionistHeaderComponent, canActivate:[AuthGuardService] }, // Cabeçalho da recepcionista

// Sala de emergência
{ path: 'emergency-room', component: EmergencyRoomComponent, canActivate:[AuthGuardService] }, // Sala de emergência

// Consultas em andamento
{ path: 'consultations-in-progress', component: ConsultationsInProgressComponent, canActivate:[AuthGuardService] }, // Consultas em andamento

// Atualização de paciente
{ path: 'patient-update', component: PatientUpdateComponent, canActivate:[AuthGuardService] }, // Atualização de paciente

// Funções de usuário
{ path: 'roles', component: RolesComponent, canActivate:[AuthGuardService] }, // Funções de usuário

// Cabeçalho médico
{ path: 'header-medico', component: HeaderMedicoComponent, canActivate:[AuthGuardService] }, // Cabeçalho médico

// Painel do médico
{ path: 'doctor-panel', component: DoctorPanelComponent, canActivate:[AuthGuardService] }, // Painel do médico
{ path: 'doctor-panel/:companyId', component: DoctorPanelComponent, canActivate:[AuthGuardService] }, // Painel do médico

// Rodapé do médico
{ path: 'footer-doctor', component: FooterDoctorComponent, canActivate:[AuthGuardService] }, // Rodapé do médico

// Sobre o próprio médico
{ path: 'doctor-about-doctor', component: DoctorAboutDoctorComponent, canActivate:[AuthGuardService] }, // Sobre o próprio médico

// Lista de empresas do médico
{ path: 'doctor-company-list/:companyId', component: DoctorCompanyListComponent, canActivate:[AuthGuardService] }, // Lista de empresas do médico
{ path: 'doctor-company-list', component: DoctorCompanyListComponent, canActivate:[AuthGuardService] }, // Lista de empresas do médico

// Sobre o dia do próprio médico
{ path: 'doctor-about-doctor-day', component: DoctorAboutDoctorDayComponent, canActivate:[AuthGuardService] }, // Sobre o dia do próprio médico

// Alerta de chat do médico
{ path: 'doctor-chat-alert', component: DoctorChatAlertComponent, canActivate:[AuthGuardService] }, // Alerta de chat do médico

// Consultas em andamento do médico
{ path: 'doctor-consultations-in-progress', component: DoctorConsultationsInProgressComponent, canActivate:[AuthGuardService] }, // Consultas em andamento do médico

// Agenda de pacientes do médico
{ path: 'doctor-patient-schedule', component: DoctorPatientScheduleComponent, canActivate:[AuthGuardService] }, // Agenda de pacientes do médico

// Sobre o paciente do médico
{ path: 'doctor-about-patient', component: DoctorAboutPatientComponent, canActivate:[AuthGuardService] }, // Sobre o paciente do médico

// Cabeçalho do administrador
{ path: 'admin-header', component: AdminHeaderComponent, canActivate:[AuthGuardService] }, // Cabeçalho do administrador

// Painel do administrador
{ path: 'admin-panel', component: AdminPanelComponent, canActivate:[AuthGuardService] }, // Painel do administrador

// Gerenciamento de funcionários
{ path: 'admin-employee-management', component: AdminEmployeeManagementComponent, canActivate:[AuthGuardService] }, // Gerenciamento de funcionários

// Gerenciamento de pacientes
{ path: 'admin-patient-management', component: AdminPatientManagementComponent, canActivate:[AuthGuardService] }, // Gerenciamento de pacientes

// Supervisão do administrador
{ path: 'admin-supervision', component: AdminSupervisionComponent, canActivate:[AuthGuardService] }, // Supervisão do administrador

// Agenda do administrador
{ path: 'admin-schedule', component: AdminScheduleComponent, canActivate:[AuthGuardService] }, // Agenda do administrador

// Lista de empresas da recepcionista
{ path: 'receptionist-company-list', component: ReceptionistCompanyListComponent, canActivate:[AuthGuardService] }, // Lista de empresas da recepcionista

// Cadastro de pacientes pelo administrador
{ path: 'admin-create-patient', component: AdminCreatePatientComponent, canActivate:[AuthGuardService] }, // Cadastro de pacientes pelo administrador

// Cadastro de funcionários pelo administrador
{ path: 'admin-create-employee', component: AdminCreateEmployeeComponent, canActivate:[AuthGuardService] }, // Cadastro de funcionários pelo administrador

// Lista de empresas do administrador
{ path: 'admin-company-list', component: AdminCompanyListComponent, canActivate:[AuthGuardService] }, // Lista de empresas do administrador

// Agenda de pacientes do administrador
{ path: 'admin-patient-schedule', component: AdminPatientScheduleComponent, canActivate:[AuthGuardService] }, // Agenda de pacientes do administrador

// Atualização de pacientes pelo administrador
{ path: 'admin-update-patient', component: AdminUpdatePatientComponent, canActivate:[AuthGuardService] }, // Atualização de pacientes pelo administrador






  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
