import { Component, OnInit } from '@angular/core';
import {PatientListElement} from '../data-objects/patient-list-element';
import {DataService} from '../data.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
   patients: Array<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(patients => this.patients = patients);
  }

}
