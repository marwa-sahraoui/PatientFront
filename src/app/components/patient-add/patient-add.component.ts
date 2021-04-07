import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  patient = {
    family: '',
    given: '',
    dob: '',
    sex: '',
    address: '',
    phone: '',
    published: false
  };
  submitted = false;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
  }

  createPatient(): void {
    const data = {
      family: this.patient.family,
      given: this.patient.given,
      dob: this.patient.dob,
      sex: this.patient.sex,
      address: this.patient.address,
      phone: this.patient.phone,
    };

    this.patientService.add(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPatient(): void {
    this.submitted = false;
    this.patient = {
      family: '',
      given: '',
      dob: '',
      sex: '',
      address: '',
      phone: '',
      published: false
    };
  }
}
