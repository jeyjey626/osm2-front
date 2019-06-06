import { Component, OnInit } from '@angular/core';
import {Patient} from '../data-objects/patient';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { Chart } from 'chart.js';
import {last} from 'rxjs/operators';
import { } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private actionUrl: string;
  protected patient: any;
  protected examList: any;
  protected sub: Subscription;
  protected chart1: Chart;
  protected chart2: Chart;
  protected name: string;
  protected surname: string;
  protected height: string;
  protected displayedColumns = ['Data Badania', 'Waga']

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.dataService.getPatientById(id).subscribe((patient: any) => {
          if (patient) {
            this.patient = patient;
            this.examList = patient.examList;
            this.surname = patient.surname;
            this.name = patient.name;
            this.height = patient.height;
            // this.patient.href = patient._links.self.href;
          } else {
            console.log(`Patient with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
    this.chart2 = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: ['2011', new Date('2016-10-5'), new Date('2017-12-1')],
        datasets: [
          {
            label: 'test',
            data: [{
              t: new Date('2001-3-15 09'),
              y: 12
            },
              {
                t: new Date('2016-10-5 09'),
                y: 21
              },
              {
                t: new Date('2017-12-1 09'),
                y: 32
              }
            ],
            fill: false
          }
        ],
        options: {
          scales: {
            xAxes: [{
              type: 'time', distribution: 'linear'
            }]
          }
        }
      }
    });
  }

  gotoList() {
    this.router.navigate(['/patients']);
  }
}


