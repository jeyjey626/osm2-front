import { Component, OnInit } from '@angular/core';
import {PatientToSend} from '../data-objects/patient-to-send';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  protected name: string;
  protected surname: string;
  protected height: string;
  protected weight: number;
  private patientToSend: any = {};
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DataService) { }

  ngOnInit() {}
  gotoList() {
    this.router.navigate(['/patients']);
  }
  save(form: NgForm) {
    this.service.savePatient(form).subscribe(result => {this.gotoList();
    }, error => console.error(error));
  }
  delete(href) {
    this.service.removePatient(href).subscribe(result => {this.gotoList();
    }, error => console.error(error));
  }
}
