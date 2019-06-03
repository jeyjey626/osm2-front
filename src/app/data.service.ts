import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Configuration} from './constant';
import {Observable} from 'rxjs';
import {PatientListElement} from './data-objects/patient-list-element';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class DataService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.Server;
  }
    public getPatientById<Patient>(patientId: number): Observable<Patient> {
      return this.http.get<Patient>(this.actionUrl + 'patients/' + patientId); }
    public getAll<Object>(): Observable<any> {
      return this.http.get(this.actionUrl + 'patients');
    }
}
