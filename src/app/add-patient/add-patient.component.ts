import { Component, OnInit } from '@angular/core';
import {PatientToSend} from '../data-objects/patient-to-send';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  protected name: string;
  protected surname: string;
  protected height: number;
  protected weight: number;
  private patientToSend: PatientToSend;
  constructor() { }

  ngOnInit() {
  }

}
