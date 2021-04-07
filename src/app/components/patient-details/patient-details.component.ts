import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  currentPatient = null;
  message = '';
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPatient(this.route.snapshot.paramMap.get('id'));
  }
  getPatient(id): void {
    this.patientService.read(id)
      .subscribe(
        data => {
          this.currentPatient = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
    updatePublished(status): void {
      const data = {
        title: this.currentPatient.family,
        description: this.currentPatient.given,
        published: status
      };

      this.patientService.update(this.currentPatient.id, data)
        .subscribe(
          response => {
            this.currentPatient.published = status;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }

    updatePatient(): void {
      this.patientService.update(this.currentPatient.id, this.currentPatient)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The patient was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

    deletePatient(): void {
      this.patientService.delete(this.currentPatient.id)
         .subscribe(
           response => {
            console.log(response);
            this.router.navigate(['/patient']);
           },
         error => {
            console.log(error);
           });
     }
}
