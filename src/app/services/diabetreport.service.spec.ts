import { TestBed } from '@angular/core/testing';

import { DiabetreportService } from './diabetreport.service';

describe('DiabetreportService', () => {
  let service: DiabetreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabetreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
