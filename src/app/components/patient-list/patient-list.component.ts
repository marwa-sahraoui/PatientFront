import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: any;
  currentPatient = null;
  currentIndex = -1;
  name = '';
  phone = '';
  address = '';

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.readPatients();
  }

  readPatients(): void {
    this.patientService.readAll()
      .subscribe(
        patients => {
          this.patients = patients;
          console.log(patients);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readPatients();
    this.currentPatient = null;
    this.currentIndex = -1;
  }

  setCurrentPatient(patient, index): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }

  searchByPhone(): void {
    this.patientService.searchByPhone(this.phone)
      .subscribe(
        X => {
          this.patients = [X];
        },
        error => {
          console.log(error);
        });
  }
  searchByAddress(): void {
    this.patientService.searchByAddress(this.address)
      .subscribe(
        patients => {
          this.patients = patients;
          console.log(patients);
        },
        error => {
          console.log(error);
        });
  }
}

