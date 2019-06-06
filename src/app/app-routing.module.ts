import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPatientsComponent} from './all-patients/all-patients.component';
import {PatientComponent} from './patient/patient.component';
import {AddPatientComponent} from './add-patient/add-patient.component';

const routes: Routes = [
  {path: '', redirectTo: '/patients', pathMatch: 'full'},
  {
    path: 'patients',
    component: AllPatientsComponent
  },
  {
    path: 'patients/show/:id',
    component: PatientComponent
  },
  {
    path: 'patients/add',
    component: AddPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
