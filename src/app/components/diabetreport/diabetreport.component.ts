import {Component, OnInit} from '@angular/core';
import {DiabetreportService} from '../../services/diabetreport.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-diabetreport',
  templateUrl: './diabetreport.component.html',
  styleUrls: ['./diabetreport.component.css']
})
export class DiabetreportComponent implements OnInit {
  patId = '';
  message = 'NO REPORT FOUND';

  constructor(private diabetreportService: DiabetreportService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getFeedback(this.route.snapshot.paramMap.get('id'));
  }

  getFeedback(id): void {
    this.diabetreportService.getFeedback({patId: id})
      .subscribe(
        result => {
          this.message = result;
          console.log(result);
        },
        error => {
          console.log(error);
        });
  }
}
