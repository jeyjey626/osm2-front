import { Component, OnInit } from '@angular/core';
import {PatientListElement} from '../data-objects/patient-list-element';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
   patients: PatientListElement[] = [
     new PatientListElement(1, 'alicja', 'make'),
     new PatientListElement(2, 'alicja', 'marrke'),
     new PatientListElement(3, 'alicja', 'maked'),
     new PatientListElement(4, 'alicja', 'mhake'),
     new PatientListElement(5, 'alicja', 'maske'),
   ];
  constructor() { }

  ngOnInit() {
  }

}
