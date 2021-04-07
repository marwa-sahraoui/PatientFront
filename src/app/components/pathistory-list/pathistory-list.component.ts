import { Component, OnInit } from '@angular/core';
import {PathistoryService} from '../../services/pathistory.service';

@Component({
  selector: 'app-pathistory-list',
  templateUrl: './pathistory-list.component.html',
  styleUrls: ['./pathistory-list.component.css']
})
export class PathistoryListComponent implements OnInit {
  pathistory: any;
  currentPatHistory = null;
  currentIndex = -1;
  patId = '';
  e = '';

  constructor(private pathistoryService: PathistoryService) {
  }

  ngOnInit(): void {
    this.readPatHistory();
  }

  readPatHistory(): void {
    this.pathistoryService.readAll()
      .subscribe(
        pathistory => {
          this.pathistory = pathistory;
          console.log(pathistory);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readPatHistory();
    this.currentPatHistory = null;
    this.currentIndex = -1;
  }

  setCurrentPatHistory(pathistory, index): void {
    this.currentPatHistory = pathistory;
    this.currentIndex = index;
  }

  read(): void {
    this.pathistoryService.read(this.patId)
      .subscribe(
        data => {
          this.pathistory = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
