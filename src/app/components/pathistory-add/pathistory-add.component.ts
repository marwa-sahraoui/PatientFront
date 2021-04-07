import { Component, OnInit } from '@angular/core';
import {PathistoryService} from '../../services/pathistory.service';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pathistory-add',
  templateUrl: './pathistory-add.component.html',
  styleUrls: ['./pathistory-add.component.css']
})
export class PathistoryAddComponent implements OnInit {

  pathistory = {
   patId: '',
    e: '',
    published : false
  };
  submitted = false;
  constructor(private pathistoryService: PathistoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pathistory.patId = this.route.snapshot.params.id;
  }
  createPathistory(): void {
    const data = {
      patId: this.pathistory.patId,
      e: this.pathistory.e,
    };

    this.pathistoryService.add(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPathistory(): void {
    this.submitted = false;
    this.pathistory = {
    patId: this.pathistory.patId,
      e: '',
      published: false
    };
  }
}
