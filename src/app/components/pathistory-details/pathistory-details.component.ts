import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PathistoryService} from '../../services/pathistory.service';

@Component({
  selector: 'app-pathistory-details',
  templateUrl: './pathistory-details.component.html',
  styleUrls: ['./pathistory-details.component.css']
})
export class PathistoryDetailsComponent implements OnInit {
  currentPathistory = null;
  message = '';
  constructor(private pathistoryService: PathistoryService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit(): void {
    this.message = '';
    this.getPathistory(this.route.snapshot.paramMap.get('id'));
  }
  getPathistory(id): void {
    this.pathistoryService.read(id)
      .subscribe(
        data => {
          this.currentPathistory = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status): void {
    const data = {
      patId: this.currentPathistory.patId,
      e: this.currentPathistory.e,
      published: status
    };

    this.pathistoryService.update(this.currentPathistory.patId, data)
      .subscribe(
        response => {
          this.currentPathistory.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updatePathistory(): void {
    this.pathistoryService.update(this.currentPathistory.id, this.currentPathistory)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The patient history was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePathistory(): void {
    this.pathistoryService.delete(this.currentPathistory.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/pathistory']);
        },
        error => {
          console.log(error);
        });
  }
}
