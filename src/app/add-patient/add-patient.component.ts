import { Component, OnInit, OnDestroy } from '@angular/core';
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
  protected patId: string;
  protected weight: number;
  private patientToSend: any = {};
  private sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DataService,
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {const id = params.id;
    if (id) {
      this.service.getPatientById(id).subscribe((patient: any) => {
        if (patient) {
          this.patientToSend.heightset = patient.height;
          this.patientToSend = patient;
          this.patientToSend.href = patient.href;
          this.patId = id;
        } else {
          console.log(`Patient with id '${id}' not found, returning to list`);
          this.gotoList();
        }
      });
    }
    });
  }
  gotoList() {
    this.router.navigate(['/patients']);
  }
  gotoPatient() {
    this.router.navigate(['/patients/show/' + this.patId]);
  }
  save(form: NgForm) {
    if (this.patId) {
      this.service.editPatient(form, this.patId).subscribe(result => {this.gotoPatient();
      }, error => console.error(error));
    }
    this.service.savePatient(form).subscribe(result => {this.gotoPatient();
    }, error => console.error(error));
  }
  delete(href) {
    this.service.removePatient(href).subscribe(result => {this.gotoList();
    }, error => console.error(error));
  }
}
