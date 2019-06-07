import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { PatientComponent } from './patient/patient.component';
import { HeaderComponent } from './header/header.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {DataService} from './data.service';
import {Configuration} from './constant';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePickerComponent } from './date-picker/date-picker.component';
@NgModule({
  declarations: [
    AppComponent,
    AllPatientsComponent,
    PatientComponent,
    HeaderComponent,
    AddPatientComponent,
    DatePickerComponent
  ],
  imports: [
    MatNativeDateModule,
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
