import { Component, OnInit } from '@angular/core';
import {Patient} from '../data-objects/patient';
import {DataService} from '../data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private actionUrl: string;
  protected patient: Patient;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
