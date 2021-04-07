import { TestBed } from '@angular/core/testing';

import { PathistoryService } from './pathistory.service';

describe('PathistoryService', () => {
  let service: PathistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
