import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { PatientComponent } from './patient/patient.component';
import { HeaderComponent } from './header/header.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {DataService} from './data.service';
import {Configuration} from './constant';
import {FormsModule} from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AllPatientsComponent,
    PatientComponent,
    HeaderComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
