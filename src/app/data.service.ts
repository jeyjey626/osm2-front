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
    public getPatientById(patientId: number): Observable<any> {
      return this.http.get<any>(this.actionUrl + 'patients/' + patientId); }
    public getAll<Object>(): Observable<any> {
      return this.http.get(this.actionUrl + 'patients');
    }
    public savePatient(patient: any): Observable<any> {
    let result: Observable<any>;
    if (patient.href) {
      result = this.http.put(patient.href, patient);
    } else {
      result = this.http.post(this.actionUrl + 'patients', patient);
    }
    return result;
    }
    public removePatient(href: string) {
    return this.http.delete(href);
    }
    public getLastExam(patientId: number): Observable<any> {
    return this.http.get<any>(this.actionUrl + 'lastexam/' + patientId);
    }
}
